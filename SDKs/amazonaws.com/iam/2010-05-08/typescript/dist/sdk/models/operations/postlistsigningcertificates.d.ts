import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListSigningCertificatesActionEnum {
    ListSigningCertificates = "ListSigningCertificates"
}
export declare enum POSTListSigningCertificatesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListSigningCertificatesRequest extends SpeakeasyBase {
    action: POSTListSigningCertificatesActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    requestBody?: Uint8Array;
    version: POSTListSigningCertificatesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListSigningCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
