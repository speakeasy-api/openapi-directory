import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsXAmzTargetEnum {
    ACMPrivateCAListTags = "ACMPrivateCA.ListTags"
}
export declare class ListTagsRequest extends SpeakeasyBase {
    listTagsRequest: shared.ListTagsRequest;
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
    xAmzTarget: ListTagsXAmzTargetEnum;
}
export declare class ListTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * Success
     */
    listTagsResponse?: shared.ListTagsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
