import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDeploymentStatusRequest extends SpeakeasyBase {
    /**
     * The ID of the deployment.
     */
    deploymentId: string;
    /**
     * The ID of the Greengrass group.
     */
    groupId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeploymentStatusResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getDeploymentStatusResponse?: shared.GetDeploymentStatusResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
