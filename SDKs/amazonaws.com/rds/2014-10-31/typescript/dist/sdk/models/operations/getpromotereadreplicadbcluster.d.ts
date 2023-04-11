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
     * <p>The identifier of the DB cluster read replica to promote. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DB cluster read replica.</p> </li> </ul> <p>Example: <code>my-cluster-replica1</code> </p>
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
