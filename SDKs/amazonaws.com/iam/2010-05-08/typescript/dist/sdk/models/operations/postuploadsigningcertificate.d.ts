import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUploadSigningCertificateActionEnum {
    UploadSigningCertificate = "UploadSigningCertificate"
}
export declare enum POSTUploadSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUploadSigningCertificateRequest extends SpeakeasyBase {
    action: POSTUploadSigningCertificateActionEnum;
    requestBody?: Uint8Array;
    version: POSTUploadSigningCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUploadSigningCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
