import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeletePolicyActionEnum {
    DeletePolicy = "DeletePolicy"
}
export declare enum GETDeletePolicyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDeletePolicyRequest extends SpeakeasyBase {
    action: GETDeletePolicyActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName?: string;
    /**
     * The name or Amazon Resource Name (ARN) of the policy.
     */
    policyName: string;
    version: GETDeletePolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeletePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
