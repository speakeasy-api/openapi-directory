import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDeploymentTargetXAmzTargetEnum {
    CodeDeploy20141006GetDeploymentTarget = "CodeDeploy_20141006.GetDeploymentTarget"
}
export declare class GetDeploymentTargetRequest extends SpeakeasyBase {
    getDeploymentTargetInput: shared.GetDeploymentTargetInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeploymentTargetXAmzTargetEnum;
}
export declare class GetDeploymentTargetResponse extends SpeakeasyBase {
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
     * DeploymentNotStartedException
     */
    deploymentNotStartedException?: any;
    /**
     * DeploymentTargetDoesNotExistException
     */
    deploymentTargetDoesNotExistException?: any;
    /**
     * DeploymentTargetIdRequiredException
     */
    deploymentTargetIdRequiredException?: any;
    /**
     * Success
     */
    getDeploymentTargetOutput?: shared.GetDeploymentTargetOutput;
    /**
     * InvalidDeploymentIdException
     */
    invalidDeploymentIdException?: any;
    /**
     * InvalidDeploymentTargetIdException
     */
    invalidDeploymentTargetIdException?: any;
    /**
     * InvalidInstanceNameException
     */
    invalidInstanceNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
