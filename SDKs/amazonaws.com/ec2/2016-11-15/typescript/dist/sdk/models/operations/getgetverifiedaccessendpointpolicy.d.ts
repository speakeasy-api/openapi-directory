import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETVerifiedAccessEndpointPolicyActionEnum {
    GetVerifiedAccessEndpointPolicy = "GetVerifiedAccessEndpointPolicy"
}
export declare enum GETGETVerifiedAccessEndpointPolicyVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETGETVerifiedAccessEndpointPolicyRequest extends SpeakeasyBase {
    action: GETGETVerifiedAccessEndpointPolicyActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the Amazon Web Services Verified Access endpoint.
     */
    verifiedAccessEndpointId: string;
    version: GETGETVerifiedAccessEndpointPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETVerifiedAccessEndpointPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
