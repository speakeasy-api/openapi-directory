import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResourceDataSyncXAmzTargetEnum {
    AmazonSSMListResourceDataSync = "AmazonSSM.ListResourceDataSync"
}
export declare class ListResourceDataSyncRequest extends SpeakeasyBase {
    listResourceDataSyncRequest: shared.ListResourceDataSyncRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourceDataSyncXAmzTargetEnum;
}
export declare class ListResourceDataSyncResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * Success
     */
    listResourceDataSyncResult?: shared.ListResourceDataSyncResult;
    /**
     * ResourceDataSyncInvalidConfigurationException
     */
    resourceDataSyncInvalidConfigurationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
