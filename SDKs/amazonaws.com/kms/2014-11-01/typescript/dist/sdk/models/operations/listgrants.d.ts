import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListGrantsXAmzTargetEnum {
    TrentServiceListGrants = "TrentService.ListGrants"
}
export declare class ListGrantsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listGrantsRequest: shared.ListGrantsRequest;
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
    xAmzTarget: ListGrantsXAmzTargetEnum;
}
export declare class ListGrantsResponse extends SpeakeasyBase {
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
     * InvalidGrantIdException
     */
    invalidGrantIdException?: any;
    /**
     * InvalidMarkerException
     */
    invalidMarkerException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
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
