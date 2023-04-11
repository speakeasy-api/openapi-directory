import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDeploymentConfigXAmzTargetEnum {
    CodeDeploy20141006GetDeploymentConfig = "CodeDeploy_20141006.GetDeploymentConfig"
}
export declare class GetDeploymentConfigRequest extends SpeakeasyBase {
    getDeploymentConfigInput: shared.GetDeploymentConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeploymentConfigXAmzTargetEnum;
}
export declare class GetDeploymentConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DeploymentConfigDoesNotExistException
     */
    deploymentConfigDoesNotExistException?: any;
    /**
     * DeploymentConfigNameRequiredException
     */
    deploymentConfigNameRequiredException?: any;
    /**
     * Success
     */
    getDeploymentConfigOutput?: shared.GetDeploymentConfigOutput;
    /**
     * InvalidComputePlatformException
     */
    invalidComputePlatformException?: any;
    /**
     * InvalidDeploymentConfigNameException
     */
    invalidDeploymentConfigNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
