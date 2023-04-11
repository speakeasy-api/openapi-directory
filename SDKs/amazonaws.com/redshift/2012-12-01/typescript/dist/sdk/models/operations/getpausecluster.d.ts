import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETPauseClusterActionEnum {
    PauseCluster = "PauseCluster"
}
export declare enum GETPauseClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETPauseClusterRequest extends SpeakeasyBase {
    action: GETPauseClusterActionEnum;
    /**
     * The identifier of the cluster to be paused.
     */
    clusterIdentifier: string;
    version: GETPauseClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETPauseClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
