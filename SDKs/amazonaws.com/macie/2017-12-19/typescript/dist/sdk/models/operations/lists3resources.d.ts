import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListS3ResourcesXAmzTargetEnum {
    MacieServiceListS3Resources = "MacieService.ListS3Resources"
}
export declare class ListS3ResourcesRequest extends SpeakeasyBase {
    listS3ResourcesRequest: shared.ListS3ResourcesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListS3ResourcesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListS3ResourcesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listS3ResourcesResult?: shared.ListS3ResourcesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
