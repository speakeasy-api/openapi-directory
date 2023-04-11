import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteRolePolicyActionEnum {
    DeleteRolePolicy = "DeleteRolePolicy"
}
export declare enum POSTDeleteRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTDeleteRolePolicyRequest extends SpeakeasyBase {
    action: POSTDeleteRolePolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteRolePolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
