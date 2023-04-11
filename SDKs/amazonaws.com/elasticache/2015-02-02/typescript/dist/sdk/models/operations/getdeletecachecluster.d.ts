import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteCacheClusterActionEnum {
    DeleteCacheCluster = "DeleteCacheCluster"
}
export declare enum GETDeleteCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDeleteCacheClusterRequest extends SpeakeasyBase {
    action: GETDeleteCacheClusterActionEnum;
    /**
     * The cluster identifier for the cluster to be deleted. This parameter is not case sensitive.
     */
    cacheClusterId: string;
    /**
     * The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. ElastiCache creates the snapshot, and then deletes the cluster immediately afterward.
     */
    finalSnapshotIdentifier?: string;
    version: GETDeleteCacheClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteCacheClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
