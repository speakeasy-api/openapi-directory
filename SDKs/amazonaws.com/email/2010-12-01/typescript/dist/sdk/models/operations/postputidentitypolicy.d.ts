import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPutIdentityPolicyActionEnum {
    PutIdentityPolicy = "PutIdentityPolicy"
}
export declare enum POSTPutIdentityPolicyVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTPutIdentityPolicyRequest extends SpeakeasyBase {
    action: POSTPutIdentityPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTPutIdentityPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPutIdentityPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
