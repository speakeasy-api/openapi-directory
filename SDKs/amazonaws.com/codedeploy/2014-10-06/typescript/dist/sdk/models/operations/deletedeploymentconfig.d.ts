import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDeploymentConfigXAmzTargetEnum {
    CodeDeploy20141006DeleteDeploymentConfig = "CodeDeploy_20141006.DeleteDeploymentConfig"
}
export declare class DeleteDeploymentConfigRequest extends SpeakeasyBase {
    deleteDeploymentConfigInput: shared.DeleteDeploymentConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDeploymentConfigXAmzTargetEnum;
}
export declare class DeleteDeploymentConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DeploymentConfigInUseException
     */
    deploymentConfigInUseException?: any;
    /**
     * DeploymentConfigNameRequiredException
     */
    deploymentConfigNameRequiredException?: any;
    /**
     * InvalidDeploymentConfigNameException
     */
    invalidDeploymentConfigNameException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
