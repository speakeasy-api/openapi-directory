import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopDeploymentXAmzTargetEnum {
    CodeDeploy20141006StopDeployment = "CodeDeploy_20141006.StopDeployment"
}
export declare class StopDeploymentRequest extends SpeakeasyBase {
    stopDeploymentInput: shared.StopDeploymentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopDeploymentXAmzTargetEnum;
}
export declare class StopDeploymentResponse extends SpeakeasyBase {
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
     * DeploymentGroupDoesNotExistException
     */
    deploymentGroupDoesNotExistException?: any;
    /**
     * DeploymentIdRequiredException
     */
    deploymentIdRequiredException?: any;
    /**
     * InvalidDeploymentIdException
     */
    invalidDeploymentIdException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopDeploymentOutput?: shared.StopDeploymentOutput;
    /**
     * UnsupportedActionForDeploymentTypeException
     */
    unsupportedActionForDeploymentTypeException?: any;
}
