import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateSigningCertificateActionEnum {
    UpdateSigningCertificate = "UpdateSigningCertificate"
}
export declare enum POSTUpdateSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUpdateSigningCertificateRequest extends SpeakeasyBase {
    action: POSTUpdateSigningCertificateActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateSigningCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateSigningCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
