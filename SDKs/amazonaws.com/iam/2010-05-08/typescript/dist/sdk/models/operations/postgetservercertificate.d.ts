import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetServerCertificateActionEnum {
    GetServerCertificate = "GetServerCertificate"
}
export declare enum POSTGetServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetServerCertificateRequest extends SpeakeasyBase {
    action: POSTGetServerCertificateActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetServerCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
