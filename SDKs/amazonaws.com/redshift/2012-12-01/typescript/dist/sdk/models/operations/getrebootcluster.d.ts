import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRebootClusterActionEnum {
    RebootCluster = "RebootCluster"
}
export declare enum GETRebootClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETRebootClusterRequest extends SpeakeasyBase {
    action: GETRebootClusterActionEnum;
    /**
     * The cluster identifier.
     */
    clusterIdentifier: string;
    version: GETRebootClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRebootClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
