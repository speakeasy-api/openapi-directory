import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetRolePolicyActionEnum {
    GetRolePolicy = "GetRolePolicy"
}
export declare enum POSTGetRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetRolePolicyRequest extends SpeakeasyBase {
    action: POSTGetRolePolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetRolePolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
