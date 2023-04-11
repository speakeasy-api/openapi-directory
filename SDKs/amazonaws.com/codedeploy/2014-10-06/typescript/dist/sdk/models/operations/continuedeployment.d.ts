import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ContinueDeploymentXAmzTargetEnum {
    CodeDeploy20141006ContinueDeployment = "CodeDeploy_20141006.ContinueDeployment"
}
export declare class ContinueDeploymentRequest extends SpeakeasyBase {
    continueDeploymentInput: shared.ContinueDeploymentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ContinueDeploymentXAmzTargetEnum;
}
export declare class ContinueDeploymentResponse extends SpeakeasyBase {
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
     * DeploymentIsNotInReadyStateException
     */
    deploymentIsNotInReadyStateException?: any;
    /**
     * InvalidDeploymentIdException
     */
    invalidDeploymentIdException?: any;
    /**
     * InvalidDeploymentStatusException
     */
    invalidDeploymentStatusException?: any;
    /**
     * InvalidDeploymentWaitTypeException
     */
    invalidDeploymentWaitTypeException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedActionForDeploymentTypeException
     */
    unsupportedActionForDeploymentTypeException?: any;
}
