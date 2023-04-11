import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutLifecycleEventHookExecutionStatusXAmzTargetEnum {
    CodeDeploy20141006PutLifecycleEventHookExecutionStatus = "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus"
}
export declare class PutLifecycleEventHookExecutionStatusRequest extends SpeakeasyBase {
    putLifecycleEventHookExecutionStatusInput: shared.PutLifecycleEventHookExecutionStatusInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutLifecycleEventHookExecutionStatusXAmzTargetEnum;
}
export declare class PutLifecycleEventHookExecutionStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DeploymentDoesNotExistException
     */
    deploymentDoesNotExistException?: any;
    /**
     * DeploymentIdRequiredException
     */
    deploymentIdRequiredException?: any;
    /**
     * InvalidDeploymentIdException
     */
    invalidDeploymentIdException?: any;
    /**
     * InvalidLifecycleEventHookExecutionIdException
     */
    invalidLifecycleEventHookExecutionIdException?: any;
    /**
     * InvalidLifecycleEventHookExecutionStatusException
     */
    invalidLifecycleEventHookExecutionStatusException?: any;
    /**
     * LifecycleEventAlreadyCompletedException
     */
    lifecycleEventAlreadyCompletedException?: any;
    /**
     * Success
     */
    putLifecycleEventHookExecutionStatusOutput?: shared.PutLifecycleEventHookExecutionStatusOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedActionForDeploymentTypeException
     */
    unsupportedActionForDeploymentTypeException?: any;
}
