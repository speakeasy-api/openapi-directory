import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRemoveListenerCertificatesActionEnum {
    RemoveListenerCertificates = "RemoveListenerCertificates"
}
export declare enum POSTRemoveListenerCertificatesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTRemoveListenerCertificatesRequest extends SpeakeasyBase {
    action: POSTRemoveListenerCertificatesActionEnum;
    requestBody?: Uint8Array;
    version: POSTRemoveListenerCertificatesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRemoveListenerCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
