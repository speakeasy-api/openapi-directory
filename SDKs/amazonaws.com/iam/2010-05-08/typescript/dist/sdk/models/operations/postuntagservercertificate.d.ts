import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUntagServerCertificateActionEnum {
    UntagServerCertificate = "UntagServerCertificate"
}
export declare enum POSTUntagServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUntagServerCertificateRequest extends SpeakeasyBase {
    action: POSTUntagServerCertificateActionEnum;
    requestBody?: Uint8Array;
    version: POSTUntagServerCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUntagServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
