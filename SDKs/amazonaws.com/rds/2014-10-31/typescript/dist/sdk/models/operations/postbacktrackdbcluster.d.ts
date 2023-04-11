import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTBacktrackDBClusterActionEnum {
    BacktrackDBCluster = "BacktrackDBCluster"
}
export declare enum POSTBacktrackDBClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTBacktrackDBClusterRequest extends SpeakeasyBase {
    action: POSTBacktrackDBClusterActionEnum;
    requestBody?: Uint8Array;
    version: POSTBacktrackDBClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTBacktrackDBClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
