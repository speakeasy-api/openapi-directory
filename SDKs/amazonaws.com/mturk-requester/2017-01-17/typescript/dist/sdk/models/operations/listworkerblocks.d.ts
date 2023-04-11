import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListWorkerBlocksXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListWorkerBlocks = "MTurkRequesterServiceV20170117.ListWorkerBlocks"
}
export declare class ListWorkerBlocksRequest extends SpeakeasyBase {
    listWorkerBlocksRequest: shared.ListWorkerBlocksRequest;
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
    xAmzTarget: ListWorkerBlocksXAmzTargetEnum;
}
export declare class ListWorkerBlocksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listWorkerBlocksResponse?: shared.ListWorkerBlocksResponse;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
