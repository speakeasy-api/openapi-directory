import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSslCertificateRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    sha1FingerprintPathParameter: string;
    /**
     * The SHA-1 fingerprint of the certificate.
     */
    sha1FingerprintQueryParameter: string;
}
export declare class GetSslCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    sslCertificateDetail?: shared.SslCertificateDetail;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
