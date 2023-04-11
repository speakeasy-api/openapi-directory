import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTTagServerCertificateActionEnum {
    TagServerCertificate = "TagServerCertificate"
}
export declare enum POSTTagServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTTagServerCertificateRequest extends SpeakeasyBase {
    action: POSTTagServerCertificateActionEnum;
    requestBody?: Uint8Array;
    version: POSTTagServerCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTTagServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
