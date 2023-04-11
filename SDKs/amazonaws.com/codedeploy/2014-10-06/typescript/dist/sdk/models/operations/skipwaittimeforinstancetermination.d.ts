import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SkipWaitTimeForInstanceTerminationXAmzTargetEnum {
    CodeDeploy20141006SkipWaitTimeForInstanceTermination = "CodeDeploy_20141006.SkipWaitTimeForInstanceTermination"
}
export declare class SkipWaitTimeForInstanceTerminationRequest extends SpeakeasyBase {
    skipWaitTimeForInstanceTerminationInput: shared.SkipWaitTimeForInstanceTerminationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SkipWaitTimeForInstanceTerminationXAmzTargetEnum;
}
export declare class SkipWaitTimeForInstanceTerminationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DeploymentAlreadyCompletedException
     */
    deploymentAlreadyCompletedException?: any;
    /**
     * DeploymentDoesNotExistException
     */
    deploymentDoesNotExistException?: any;
    /**
     * DeploymentIdRequiredException
     */
    deploymentIdRequiredException?: any;
    /**
     * DeploymentNotStartedException
     */
    deploymentNotStartedException?: any;
    /**
     * InvalidDeploymentIdException
     */
    invalidDeploymentIdException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedActionForDeploymentTypeException
     */
    unsupportedActionForDeploymentTypeException?: any;
}
