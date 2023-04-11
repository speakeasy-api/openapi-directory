import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateHsmClientCertificateActionEnum {
    CreateHsmClientCertificate = "CreateHsmClientCertificate"
}
export declare enum POSTCreateHsmClientCertificateVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTCreateHsmClientCertificateRequest extends SpeakeasyBase {
    action: POSTCreateHsmClientCertificateActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateHsmClientCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateHsmClientCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
