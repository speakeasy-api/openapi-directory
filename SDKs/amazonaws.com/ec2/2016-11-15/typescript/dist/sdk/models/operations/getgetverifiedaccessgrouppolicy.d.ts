import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETVerifiedAccessGroupPolicyActionEnum {
    GetVerifiedAccessGroupPolicy = "GetVerifiedAccessGroupPolicy"
}
export declare enum GETGETVerifiedAccessGroupPolicyVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETGETVerifiedAccessGroupPolicyRequest extends SpeakeasyBase {
    action: GETGETVerifiedAccessGroupPolicyActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the Amazon Web Services Verified Access group.
     */
    verifiedAccessGroupId: string;
    version: GETGETVerifiedAccessGroupPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETVerifiedAccessGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
