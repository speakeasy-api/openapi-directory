import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTResizeClusterActionEnum {
    ResizeCluster = "ResizeCluster"
}
export declare enum POSTResizeClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTResizeClusterRequest extends SpeakeasyBase {
    action: POSTResizeClusterActionEnum;
    requestBody?: Uint8Array;
    version: POSTResizeClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTResizeClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
