import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETStackPolicyActionEnum {
    GetStackPolicy = "GetStackPolicy"
}
export declare enum GETGETStackPolicyVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETGETStackPolicyRequest extends SpeakeasyBase {
    action: GETGETStackPolicyActionEnum;
    /**
     * The name or unique stack ID that's associated with the stack whose policy you want to get.
     */
    stackName: string;
    version: GETGETStackPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETStackPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
