import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListServerCertificateTagsActionEnum {
    ListServerCertificateTags = "ListServerCertificateTags"
}
export declare enum POSTListServerCertificateTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListServerCertificateTagsRequest extends SpeakeasyBase {
    action: POSTListServerCertificateTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTListServerCertificateTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListServerCertificateTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
