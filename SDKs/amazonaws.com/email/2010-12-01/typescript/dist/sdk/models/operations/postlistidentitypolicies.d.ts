import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListIdentityPoliciesActionEnum {
    ListIdentityPolicies = "ListIdentityPolicies"
}
export declare enum POSTListIdentityPoliciesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTListIdentityPoliciesRequest extends SpeakeasyBase {
    action: POSTListIdentityPoliciesActionEnum;
    requestBody?: Uint8Array;
    version: POSTListIdentityPoliciesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListIdentityPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
