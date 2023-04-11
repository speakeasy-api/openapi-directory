import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRetirableGrantsXAmzTargetEnum {
    TrentServiceListRetirableGrants = "TrentService.ListRetirableGrants"
}
export declare class ListRetirableGrantsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listRetirableGrantsRequest: shared.ListRetirableGrantsRequest;
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
    xAmzTarget: ListRetirableGrantsXAmzTargetEnum;
}
export declare class ListRetirableGrantsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
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
    listGrantsResponse?: shared.ListGrantsResponse;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
