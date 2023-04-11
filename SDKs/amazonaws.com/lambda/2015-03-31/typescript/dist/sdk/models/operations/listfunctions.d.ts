import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Set to <code>ALL</code> to include entries for all published versions of each function.
 */
export declare enum ListFunctionsFunctionVersionEnum {
    All = "ALL"
}
export declare class ListFunctionsRequest extends SpeakeasyBase {
    /**
     * Set to <code>ALL</code> to include entries for all published versions of each function.
     */
    functionVersion?: ListFunctionsFunctionVersionEnum;
    /**
     * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
     */
    marker?: string;
    /**
     * For Lambda@Edge functions, the Amazon Web Services Region of the master function. For example, <code>us-east-1</code> filters the list of functions to include only Lambda@Edge functions replicated from a master function in US East (N. Virginia). If specified, you must set <code>FunctionVersion</code> to <code>ALL</code>.
     */
    masterRegion?: string;
    /**
     * The maximum number of functions to return in the response. Note that <code>ListFunctions</code> returns a maximum of 50 items in each response, even if you set the number higher.
     */
    maxItems?: number;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFunctionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    listFunctionsResponse?: shared.ListFunctionsResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
