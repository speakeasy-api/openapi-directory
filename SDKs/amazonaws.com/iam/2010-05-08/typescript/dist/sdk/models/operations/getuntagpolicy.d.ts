import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUntagPolicyActionEnum {
    UntagPolicy = "UntagPolicy"
}
export declare enum GETUntagPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETUntagPolicyRequest extends SpeakeasyBase {
    action: GETUntagPolicyActionEnum;
    /**
     * <p>The ARN of the IAM customer managed policy from which you want to remove tags.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    policyArn: string;
    /**
     * A list of key names as a simple array of strings. The tags with matching keys are removed from the specified policy.
     */
    tagKeys: string[];
    version: GETUntagPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUntagPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
