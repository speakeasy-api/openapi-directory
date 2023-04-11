import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListProtectionsXAmzTargetEnum {
    AWSShield20160616ListProtections = "AWSShield_20160616.ListProtections"
}
export declare class ListProtectionsRequest extends SpeakeasyBase {
    listProtectionsRequest: shared.ListProtectionsRequest;
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
    xAmzTarget: ListProtectionsXAmzTargetEnum;
}
export declare class ListProtectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidPaginationTokenException
     */
    invalidPaginationTokenException?: any;
    /**
     * Success
     */
    listProtectionsResponse?: shared.ListProtectionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
