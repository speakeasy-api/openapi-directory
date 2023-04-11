import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDatalakeStatusRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Web Services account ID for which a static snapshot of the current Amazon Web Services Region, including enabled accounts and log sources, is retrieved.
     */
    accountSet?: string[];
    /**
     * The maximum limit of accounts for which the static snapshot of the current Region, including enabled accounts and log sources, is retrieved.
     */
    maxAccountResults?: number;
    /**
     * <p>Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged. </p> <p>Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</p>
     */
    nextToken?: string;
}
export declare class GetDatalakeStatusRequest extends SpeakeasyBase {
    requestBody: GetDatalakeStatusRequestBody;
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
    maxAccountResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetDatalakeStatusResponse extends SpeakeasyBase {
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
     * Success
     */
    getDatalakeStatusResponse?: shared.GetDatalakeStatusResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
