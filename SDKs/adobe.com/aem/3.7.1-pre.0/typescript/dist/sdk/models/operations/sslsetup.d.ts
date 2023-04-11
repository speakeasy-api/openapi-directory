import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SslSetupRequestBodyCertificateFile extends SpeakeasyBase {
    certificateFile: string;
    content: Uint8Array;
}
export declare class SslSetupRequestBodyPrivatekeyFile extends SpeakeasyBase {
    content: Uint8Array;
    privatekeyFile: string;
}
export declare class SslSetupRequestBody extends SpeakeasyBase {
    certificateFile?: SslSetupRequestBodyCertificateFile;
    privatekeyFile?: SslSetupRequestBodyPrivatekeyFile;
}
export declare class SslSetupRequest extends SpeakeasyBase {
    requestBody?: SslSetupRequestBody;
    httpsHostname: string;
    httpsPort: string;
    keystorePassword: string;
    keystorePasswordConfirm: string;
    truststorePassword: string;
    truststorePasswordConfirm: string;
}
export declare class SslSetupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    sslSetupDefaultTextPlainString?: string;
}
