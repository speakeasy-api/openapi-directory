import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteHsmClientCertificateActionEnum {
    DeleteHsmClientCertificate = "DeleteHsmClientCertificate"
}
export declare enum POSTDeleteHsmClientCertificateVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTDeleteHsmClientCertificateRequest extends SpeakeasyBase {
    action: POSTDeleteHsmClientCertificateActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteHsmClientCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteHsmClientCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
