import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSslCertificateRequestRequest extends SpeakeasyBase {
    /**
     * The id of the certificate request.
     */
    id: number;
}
export declare class GetSslCertificateRequestResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Success
     */
    sslCertificateRequestDetail?: shared.SslCertificateRequestDetail;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
