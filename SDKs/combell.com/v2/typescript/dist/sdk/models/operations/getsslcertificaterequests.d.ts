import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSslCertificateRequestsRequest extends SpeakeasyBase {
    /**
     * The number of items to skip in the resultset.
     */
    skip?: number;
    /**
     * The number of items to return in the resultset. The returned count can be equal or less than this number.
     */
    take?: number;
}
export declare class GetSslCertificateRequestsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Success
     */
    sslCertificateRequests?: shared.SslCertificateRequest[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
