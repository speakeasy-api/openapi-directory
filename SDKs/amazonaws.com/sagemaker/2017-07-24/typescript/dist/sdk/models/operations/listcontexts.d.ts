import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListContextsXAmzTargetEnum {
    SageMakerListContexts = "SageMaker.ListContexts"
}
export declare class ListContextsRequest extends SpeakeasyBase {
    listContextsRequest: shared.ListContextsRequest;
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
    xAmzTarget: ListContextsXAmzTargetEnum;
}
export declare class ListContextsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listContextsResponse?: shared.ListContextsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
