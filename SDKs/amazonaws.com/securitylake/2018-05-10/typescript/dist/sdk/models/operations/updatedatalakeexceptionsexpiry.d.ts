import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDatalakeExceptionsExpiryRequestBody extends SpeakeasyBase {
    /**
     * The time-to-live (TTL) for the exception message to remain.
     */
    exceptionMessageExpiry: number;
}
export declare class UpdateDatalakeExceptionsExpiryRequest extends SpeakeasyBase {
    requestBody: UpdateDatalakeExceptionsExpiryRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDatalakeExceptionsExpiryResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateDatalakeExceptionsExpiryResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
