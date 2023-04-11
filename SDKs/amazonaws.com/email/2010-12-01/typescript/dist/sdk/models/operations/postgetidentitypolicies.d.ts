import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetIdentityPoliciesActionEnum {
    GetIdentityPolicies = "GetIdentityPolicies"
}
export declare enum POSTGetIdentityPoliciesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTGetIdentityPoliciesRequest extends SpeakeasyBase {
    action: POSTGetIdentityPoliciesActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetIdentityPoliciesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetIdentityPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
