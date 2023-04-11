import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
 */
export declare enum CreateDeploymentRequestBodyDeploymentTypeEnum {
    NewDeployment = "NewDeployment",
    Redeployment = "Redeployment",
    ResetDeployment = "ResetDeployment",
    ForceResetDeployment = "ForceResetDeployment"
}
export declare class CreateDeploymentRequestBody extends SpeakeasyBase {
    /**
     * The ID of the deployment if you wish to redeploy a previous deployment.
     */
    deploymentId?: string;
    /**
     * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
     */
    deploymentType: CreateDeploymentRequestBodyDeploymentTypeEnum;
    /**
     * The ID of the group version to be deployed.
     */
    groupVersionId?: string;
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    /**
     * The ID of the Greengrass group.
     */
    groupId: string;
    requestBody: CreateDeploymentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A client token used to correlate requests and responses.
     */
    xAmznClientToken?: string;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createDeploymentResponse?: shared.CreateDeploymentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
