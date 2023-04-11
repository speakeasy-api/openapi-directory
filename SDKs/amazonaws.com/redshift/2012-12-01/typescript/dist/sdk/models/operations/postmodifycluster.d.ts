import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyClusterActionEnum {
    ModifyCluster = "ModifyCluster"
}
export declare enum POSTModifyClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTModifyClusterRequest extends SpeakeasyBase {
    action: POSTModifyClusterActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
