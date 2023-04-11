import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetExpiredCertsSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
export declare class GetExpiredCertsRequest extends SpeakeasyBase {
    /**
     * SHA2 hash of device firmware
     */
    firmwareHash: string;
}
export declare class GetExpiredCertsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    expiredCerts?: shared.ExpiredCert[];
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
