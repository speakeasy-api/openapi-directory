import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateServerCertificateActionEnum {
    UpdateServerCertificate = "UpdateServerCertificate"
}
export declare enum POSTUpdateServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUpdateServerCertificateRequest extends SpeakeasyBase {
    action: POSTUpdateServerCertificateActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateServerCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
