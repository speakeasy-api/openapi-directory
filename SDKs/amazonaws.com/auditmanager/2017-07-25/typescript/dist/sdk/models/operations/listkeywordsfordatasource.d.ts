import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The control mapping data source that the keywords apply to.
 */
export declare enum ListKeywordsForDataSourceSourceEnum {
    AWSCloudtrail = "AWS_Cloudtrail",
    AWSConfig = "AWS_Config",
    AWSSecurityHub = "AWS_Security_Hub",
    AWSAPICall = "AWS_API_Call",
    Manual = "MANUAL"
}
export declare class ListKeywordsForDataSourceRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  Represents the maximum number of results on a page or for an API request call.
     */
    maxResults?: number;
    /**
     *  The pagination token that's used to fetch the next set of results.
     */
    nextToken?: string;
    /**
     *  The control mapping data source that the keywords apply to.
     */
    source: ListKeywordsForDataSourceSourceEnum;
}
export declare class ListKeywordsForDataSourceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listKeywordsForDataSourceResponse?: shared.ListKeywordsForDataSourceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
