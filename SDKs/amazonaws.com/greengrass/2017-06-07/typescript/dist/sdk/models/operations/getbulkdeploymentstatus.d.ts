import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBulkDeploymentStatusRequest extends SpeakeasyBase {
    /**
     * The ID of the bulk deployment.
     */
    bulkDeploymentId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBulkDeploymentStatusResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getBulkDeploymentStatusResponse?: shared.GetBulkDeploymentStatusResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
