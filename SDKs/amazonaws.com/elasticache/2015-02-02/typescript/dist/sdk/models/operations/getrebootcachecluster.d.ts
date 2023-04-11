import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRebootCacheClusterActionEnum {
    RebootCacheCluster = "RebootCacheCluster"
}
export declare enum GETRebootCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETRebootCacheClusterRequest extends SpeakeasyBase {
    action: GETRebootCacheClusterActionEnum;
    /**
     * The cluster identifier. This parameter is stored as a lowercase string.
     */
    cacheClusterId: string;
    /**
     * A list of cache node IDs to reboot. A node ID is a numeric identifier (0001, 0002, etc.). To reboot an entire cluster, specify all of the cache node IDs.
     */
    cacheNodeIdsToReboot: string[];
    version: GETRebootCacheClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRebootCacheClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
