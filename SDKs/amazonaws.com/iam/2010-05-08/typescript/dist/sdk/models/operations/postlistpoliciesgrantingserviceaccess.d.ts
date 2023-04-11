import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListPoliciesGrantingServiceAccessActionEnum {
    ListPoliciesGrantingServiceAccess = "ListPoliciesGrantingServiceAccess"
}
export declare enum POSTListPoliciesGrantingServiceAccessVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListPoliciesGrantingServiceAccessRequest extends SpeakeasyBase {
    action: POSTListPoliciesGrantingServiceAccessActionEnum;
    requestBody?: Uint8Array;
    version: POSTListPoliciesGrantingServiceAccessVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListPoliciesGrantingServiceAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
