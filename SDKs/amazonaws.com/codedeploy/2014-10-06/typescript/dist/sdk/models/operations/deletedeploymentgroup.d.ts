import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDeploymentGroupXAmzTargetEnum {
    CodeDeploy20141006DeleteDeploymentGroup = "CodeDeploy_20141006.DeleteDeploymentGroup"
}
export declare class DeleteDeploymentGroupRequest extends SpeakeasyBase {
    deleteDeploymentGroupInput: shared.DeleteDeploymentGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDeploymentGroupXAmzTargetEnum;
}
export declare class DeleteDeploymentGroupResponse extends SpeakeasyBase {
    /**
     * ApplicationNameRequiredException
     */
    applicationNameRequiredException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteDeploymentGroupOutput?: shared.DeleteDeploymentGroupOutput;
    /**
     * DeploymentGroupNameRequiredException
     */
    deploymentGroupNameRequiredException?: any;
    /**
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    /**
     * InvalidDeploymentGroupNameException
     */
    invalidDeploymentGroupNameException?: any;
    /**
     * InvalidRoleException
     */
    invalidRoleException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
