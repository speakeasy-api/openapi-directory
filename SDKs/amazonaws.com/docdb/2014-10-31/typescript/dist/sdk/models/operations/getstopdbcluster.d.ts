import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETStopDBClusterActionEnum {
    StopDBCluster = "StopDBCluster"
}
export declare enum GETStopDBClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETStopDBClusterRequest extends SpeakeasyBase {
    action: GETStopDBClusterActionEnum;
    /**
     * The identifier of the cluster to stop. Example: <code>docdb-2019-05-28-15-24-52</code>
     */
    dbClusterIdentifier: string;
    version: GETStopDBClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETStopDBClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
