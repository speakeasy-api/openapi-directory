import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyCacheClusterActionEnum {
    ModifyCacheCluster = "ModifyCacheCluster"
}
export declare enum POSTModifyCacheClusterVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTModifyCacheClusterRequest extends SpeakeasyBase {
    action: POSTModifyCacheClusterActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyCacheClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyCacheClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
