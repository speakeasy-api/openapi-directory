import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAddListenerCertificatesActionEnum {
    AddListenerCertificates = "AddListenerCertificates"
}
export declare enum POSTAddListenerCertificatesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTAddListenerCertificatesRequest extends SpeakeasyBase {
    action: POSTAddListenerCertificatesActionEnum;
    requestBody?: Uint8Array;
    version: POSTAddListenerCertificatesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAddListenerCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
