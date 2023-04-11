import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnableCustomerEncryptionRequest extends SpeakeasyBase {
    enableCustomerEncryptionRequest: shared.EnableCustomerEncryptionRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class EnableCustomerEncryptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customerData?: shared.CustomerData;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
