import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPauseClusterActionEnum {
    PauseCluster = "PauseCluster"
}
export declare enum POSTPauseClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTPauseClusterRequest extends SpeakeasyBase {
    action: POSTPauseClusterActionEnum;
    requestBody?: Uint8Array;
    version: POSTPauseClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPauseClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
