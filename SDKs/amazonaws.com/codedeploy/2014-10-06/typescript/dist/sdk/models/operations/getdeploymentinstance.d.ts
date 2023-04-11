import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDeploymentInstanceXAmzTargetEnum {
    CodeDeploy20141006GetDeploymentInstance = "CodeDeploy_20141006.GetDeploymentInstance"
}
export declare class GetDeploymentInstanceRequest extends SpeakeasyBase {
    getDeploymentInstanceInput: shared.GetDeploymentInstanceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeploymentInstanceXAmzTargetEnum;
}
export declare class GetDeploymentInstanceResponse extends SpeakeasyBase {
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
    getDeploymentInstanceOutput?: shared.GetDeploymentInstanceOutput;
    /**
     * InstanceDoesNotExistException
     */
    instanceDoesNotExistException?: any;
    /**
     * InstanceIdRequiredException
     */
    instanceIdRequiredException?: any;
    /**
     * InvalidComputePlatformException
     */
    invalidComputePlatformException?: any;
    /**
     * InvalidDeploymentIdException
     */
    invalidDeploymentIdException?: any;
    /**
     * InvalidInstanceNameException
     */
    invalidInstanceNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
