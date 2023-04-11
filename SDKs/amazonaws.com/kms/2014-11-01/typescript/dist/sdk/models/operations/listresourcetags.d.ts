import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResourceTagsXAmzTargetEnum {
    TrentServiceListResourceTags = "TrentService.ListResourceTags"
}
export declare class ListResourceTagsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listResourceTagsRequest: shared.ListResourceTagsRequest;
    /**
     * Pagination token
     */
    marker?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourceTagsXAmzTargetEnum;
}
export declare class ListResourceTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidMarkerException
     */
    invalidMarkerException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * Success
     */
    listResourceTagsResponse?: shared.ListResourceTagsResponse;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
