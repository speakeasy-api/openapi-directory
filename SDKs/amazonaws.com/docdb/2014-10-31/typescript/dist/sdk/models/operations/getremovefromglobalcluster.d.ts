import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRemoveFromGlobalClusterActionEnum {
    RemoveFromGlobalCluster = "RemoveFromGlobalCluster"
}
export declare enum GETRemoveFromGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETRemoveFromGlobalClusterRequest extends SpeakeasyBase {
    action: GETRemoveFromGlobalClusterActionEnum;
    /**
     * The Amazon Resource Name (ARN) identifying the cluster that was detached from the Amazon DocumentDB global cluster.
     */
    dbClusterIdentifier: string;
    /**
     * The cluster identifier to detach from the Amazon DocumentDB global cluster.
     */
    globalClusterIdentifier: string;
    version: GETRemoveFromGlobalClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRemoveFromGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
