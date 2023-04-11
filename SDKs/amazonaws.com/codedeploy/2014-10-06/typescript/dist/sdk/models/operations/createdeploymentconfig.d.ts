import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDeploymentConfigXAmzTargetEnum {
    CodeDeploy20141006CreateDeploymentConfig = "CodeDeploy_20141006.CreateDeploymentConfig"
}
export declare class CreateDeploymentConfigRequest extends SpeakeasyBase {
    createDeploymentConfigInput: shared.CreateDeploymentConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDeploymentConfigXAmzTargetEnum;
}
export declare class CreateDeploymentConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDeploymentConfigOutput?: shared.CreateDeploymentConfigOutput;
    /**
     * DeploymentConfigAlreadyExistsException
     */
    deploymentConfigAlreadyExistsException?: any;
    /**
     * DeploymentConfigLimitExceededException
     */
    deploymentConfigLimitExceededException?: any;
    /**
     * DeploymentConfigNameRequiredException
     */
    deploymentConfigNameRequiredException?: any;
    /**
     * InvalidComputePlatformException
     */
    invalidComputePlatformException?: any;
    /**
     * InvalidDeploymentConfigNameException
     */
    invalidDeploymentConfigNameException?: any;
    /**
     * InvalidMinimumHealthyHostValueException
     */
    invalidMinimumHealthyHostValueException?: any;
    /**
     * InvalidTrafficRoutingConfigurationException
     */
    invalidTrafficRoutingConfigurationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
