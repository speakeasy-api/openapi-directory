import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPrivateKeysSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
export declare class GetPrivateKeysRequest extends SpeakeasyBase {
    /**
     * SHA2 hash of device firmware
     */
    firmwareHash: string;
}
export declare class GetPrivateKeysResponse extends SpeakeasyBase {
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
