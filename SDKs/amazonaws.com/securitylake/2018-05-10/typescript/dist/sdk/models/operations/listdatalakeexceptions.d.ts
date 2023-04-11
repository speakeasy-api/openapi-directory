import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDatalakeExceptionsRequestBody extends SpeakeasyBase {
    /**
     * List the maximum number of failures in Security Lake.
     */
    maxFailures?: number;
    /**
     * <p>List if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged. </p> <p>Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</p>
     */
    nextToken?: string;
    /**
     * List the Amazon Web Services Regions from which exceptions are retrieved.
     */
    regionSet?: shared.RegionEnum[];
}
export declare class ListDatalakeExceptionsRequest extends SpeakeasyBase {
    requestBody: ListDatalakeExceptionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxFailures?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListDatalakeExceptionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listDatalakeExceptionsResponse?: shared.ListDatalakeExceptionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
