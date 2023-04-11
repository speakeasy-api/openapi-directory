import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETResumeClusterActionEnum {
    ResumeCluster = "ResumeCluster"
}
export declare enum GETResumeClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETResumeClusterRequest extends SpeakeasyBase {
    action: GETResumeClusterActionEnum;
    /**
     * The identifier of the cluster to be resumed.
     */
    clusterIdentifier: string;
    version: GETResumeClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETResumeClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
