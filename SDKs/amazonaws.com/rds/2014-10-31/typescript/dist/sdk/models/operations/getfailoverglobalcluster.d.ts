import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETFailoverGlobalClusterActionEnum {
    FailoverGlobalCluster = "FailoverGlobalCluster"
}
export declare enum GETFailoverGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETFailoverGlobalClusterRequest extends SpeakeasyBase {
    action: GETFailoverGlobalClusterActionEnum;
    /**
     * <p>Identifier of the Aurora global database (<a>GlobalCluster</a>) that should be failed over. The identifier is the unique key assigned by the user when the Aurora global database was created. In other words, it's the name of the Aurora global database that you want to fail over.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <a>GlobalCluster</a> (Aurora global database).</p> </li> </ul>
     */
    globalClusterIdentifier: string;
    /**
     * Identifier of the secondary Aurora DB cluster that you want to promote to primary for the Aurora global database (<a>GlobalCluster</a>.) Use the Amazon Resource Name (ARN) for the identifier so that Aurora can locate the cluster in its Amazon Web Services Region.
     */
    targetDbClusterIdentifier: string;
    version: GETFailoverGlobalClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETFailoverGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
