import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETFailoverDBClusterActionEnum {
    FailoverDBCluster = "FailoverDBCluster"
}
export declare enum GETFailoverDBClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETFailoverDBClusterRequest extends SpeakeasyBase {
    action: GETFailoverDBClusterActionEnum;
    /**
     * <p>A DB cluster identifier to force a failover for. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>
     */
    dbClusterIdentifier: string;
    /**
     * <p>The name of the DB instance to promote to the primary DB instance.</p> <p>Specify the DB instance identifier for an Aurora Replica or a Multi-AZ readable standby in the DB cluster, for example <code>mydbcluster-replica1</code>.</p> <p>This setting isn't supported for RDS for MySQL Multi-AZ DB clusters.</p>
     */
    targetDBInstanceIdentifier?: string;
    version: GETFailoverDBClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETFailoverDBClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
