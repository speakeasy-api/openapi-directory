import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETMoveByoipCidrToIpamActionEnum {
    MoveByoipCidrToIpam = "MoveByoipCidrToIpam"
}
export declare enum GETMoveByoipCidrToIpamVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETMoveByoipCidrToIpamRequest extends SpeakeasyBase {
    action: GETMoveByoipCidrToIpamActionEnum;
    /**
     * The BYOIP CIDR.
     */
    cidr: string;
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The IPAM pool ID.
     */
    ipamPoolId: string;
    /**
     * The Amazon Web Services account ID of the owner of the IPAM pool.
     */
    ipamPoolOwner: string;
    version: GETMoveByoipCidrToIpamVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETMoveByoipCidrToIpamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
