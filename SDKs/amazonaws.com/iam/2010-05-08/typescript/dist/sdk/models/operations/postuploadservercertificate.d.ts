import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUploadServerCertificateActionEnum {
    UploadServerCertificate = "UploadServerCertificate"
}
export declare enum POSTUploadServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUploadServerCertificateRequest extends SpeakeasyBase {
    action: POSTUploadServerCertificateActionEnum;
    requestBody?: Uint8Array;
    version: POSTUploadServerCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUploadServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
