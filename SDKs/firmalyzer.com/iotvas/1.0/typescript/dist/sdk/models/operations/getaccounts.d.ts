import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountsSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
export declare class GetAccountsRequest extends SpeakeasyBase {
    /**
     * SHA2 hash of device firmware
     */
    firmwareHash: string;
}
export declare class GetAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    defaultAccounts?: shared.DefaultAccount[];
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
