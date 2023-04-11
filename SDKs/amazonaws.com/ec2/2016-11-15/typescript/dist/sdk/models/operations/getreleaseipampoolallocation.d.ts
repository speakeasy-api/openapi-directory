import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETReleaseIpamPoolAllocationActionEnum {
    ReleaseIpamPoolAllocation = "ReleaseIpamPoolAllocation"
}
export declare enum GETReleaseIpamPoolAllocationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETReleaseIpamPoolAllocationRequest extends SpeakeasyBase {
    action: GETReleaseIpamPoolAllocationActionEnum;
    /**
     * The CIDR of the allocation you want to release.
     */
    cidr: string;
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the allocation.
     */
    ipamPoolAllocationId: string;
    /**
     * The ID of the IPAM pool which contains the allocation you want to release.
     */
    ipamPoolId: string;
    version: GETReleaseIpamPoolAllocationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETReleaseIpamPoolAllocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
