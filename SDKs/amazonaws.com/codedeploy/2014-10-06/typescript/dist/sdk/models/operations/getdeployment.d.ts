import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDeploymentXAmzTargetEnum {
    CodeDeploy20141006GetDeployment = "CodeDeploy_20141006.GetDeployment"
}
export declare class GetDeploymentRequest extends SpeakeasyBase {
    getDeploymentInput: shared.GetDeploymentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeploymentXAmzTargetEnum;
}
export declare class GetDeploymentResponse extends SpeakeasyBase {
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
     * Success
     */
    getDeploymentOutput?: shared.GetDeploymentOutput;
    /**
     * InvalidDeploymentIdException
     */
    invalidDeploymentIdException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
