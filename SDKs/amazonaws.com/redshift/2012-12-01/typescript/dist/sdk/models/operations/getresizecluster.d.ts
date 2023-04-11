import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETResizeClusterActionEnum {
    ResizeCluster = "ResizeCluster"
}
export declare enum GETResizeClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETResizeClusterRequest extends SpeakeasyBase {
    action: GETResizeClusterActionEnum;
    /**
     * A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to <code>false</code>, the resize type is elastic.
     */
    classic?: boolean;
    /**
     * The unique identifier for the cluster to resize.
     */
    clusterIdentifier: string;
    /**
     * The new cluster type for the specified cluster.
     */
    clusterType?: string;
    /**
     * The new node type for the nodes you are adding. If not specified, the cluster's current node type is used.
     */
    nodeType?: string;
    /**
     * The new number of nodes for the cluster. If not specified, the cluster's current number of nodes is used.
     */
    numberOfNodes?: number;
    /**
     * The identifier of the reserved node.
     */
    reservedNodeId?: string;
    /**
     * The identifier of the target reserved node offering.
     */
    targetReservedNodeOfferingId?: string;
    version: GETResizeClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETResizeClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
