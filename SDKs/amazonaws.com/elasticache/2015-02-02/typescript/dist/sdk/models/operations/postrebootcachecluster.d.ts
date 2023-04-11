import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRebootCacheClusterActionEnum {
    RebootCacheCluster = "RebootCacheCluster"
}
export declare enum POSTRebootCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTRebootCacheClusterRequest extends SpeakeasyBase {
    action: POSTRebootCacheClusterActionEnum;
    requestBody?: Uint8Array;
    version: POSTRebootCacheClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRebootCacheClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
