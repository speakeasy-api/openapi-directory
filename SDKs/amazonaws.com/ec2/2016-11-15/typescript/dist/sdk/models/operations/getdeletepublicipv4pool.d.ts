import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeletePublicIpv4PoolActionEnum {
    DeletePublicIpv4Pool = "DeletePublicIpv4Pool"
}
export declare enum GETDeletePublicIpv4PoolVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeletePublicIpv4PoolRequest extends SpeakeasyBase {
    action: GETDeletePublicIpv4PoolActionEnum;
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the public IPv4 pool you want to delete.
     */
    poolId: string;
    version: GETDeletePublicIpv4PoolVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeletePublicIpv4PoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
