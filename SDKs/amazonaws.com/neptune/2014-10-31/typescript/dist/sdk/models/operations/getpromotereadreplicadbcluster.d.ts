import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETPromoteReadReplicaDBClusterActionEnum {
    PromoteReadReplicaDBCluster = "PromoteReadReplicaDBCluster"
}
export declare enum GETPromoteReadReplicaDBClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETPromoteReadReplicaDBClusterRequest extends SpeakeasyBase {
    action: GETPromoteReadReplicaDBClusterActionEnum;
    /**
     * Not supported.
     */
    dbClusterIdentifier: string;
    version: GETPromoteReadReplicaDBClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETPromoteReadReplicaDBClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
