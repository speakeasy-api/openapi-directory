import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWeakKeysSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
export declare class GetWeakKeysRequest extends SpeakeasyBase {
    /**
     * SHA2 hash of device firmware
     */
    firmwareHash: string;
}
export declare class GetWeakKeysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    cryptoKeys?: shared.CryptoKey[];
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
