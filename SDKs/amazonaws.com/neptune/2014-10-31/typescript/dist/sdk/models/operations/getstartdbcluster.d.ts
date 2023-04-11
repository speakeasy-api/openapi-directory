import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETStartDBClusterActionEnum {
    StartDBCluster = "StartDBCluster"
}
export declare enum GETStartDBClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETStartDBClusterRequest extends SpeakeasyBase {
    action: GETStartDBClusterActionEnum;
    /**
     * The DB cluster identifier of the Neptune DB cluster to be started. This parameter is stored as a lowercase string.
     */
    dbClusterIdentifier: string;
    version: GETStartDBClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETStartDBClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
