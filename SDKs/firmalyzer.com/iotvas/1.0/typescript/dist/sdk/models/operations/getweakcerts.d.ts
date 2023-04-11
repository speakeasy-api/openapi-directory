import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWeakCertsSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
export declare class GetWeakCertsRequest extends SpeakeasyBase {
    /**
     * SHA2 hash of device firmware
     */
    firmwareHash: string;
}
export declare class GetWeakCertsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    weakCerts?: shared.WeakCert[];
}
