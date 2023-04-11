import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadCertificateRequest extends SpeakeasyBase {
    /**
     * The file format of the returned file stream:
     *
     * @remarks
     * <ul><li>PFX: Also known as PKCS #12, is a single, password protected certificate archive that contains the entire certificate chain plus the matching private key.</li></ul>
     */
    fileFormat: shared.SslCertificateFileFormatEnum;
    /**
     * The password used to protect the certificate file.<br />
     */
    password: string;
    /**
     * Automatically added
     */
    sha1FingerprintPathParameter: string;
    /**
     * The SHA-1 fingerprint of the certificate.
     */
    sha1FingerprintQueryParameter: string;
}
export declare class DownloadCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    downloadCertificate200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
