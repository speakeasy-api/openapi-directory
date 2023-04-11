import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class VerifySslCertificateRequestDomainValidationsRequest extends SpeakeasyBase {
    /**
     * The id of the certificate request.
     */
    id: number;
}
export declare class VerifySslCertificateRequestDomainValidationsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
