import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTExecutePolicyActionEnum {
    ExecutePolicy = "ExecutePolicy"
}
export declare enum POSTExecutePolicyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTExecutePolicyRequest extends SpeakeasyBase {
    action: POSTExecutePolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTExecutePolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTExecutePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
