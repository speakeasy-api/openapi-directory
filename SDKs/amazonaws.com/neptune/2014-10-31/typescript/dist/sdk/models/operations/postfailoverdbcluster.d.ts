import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTFailoverDBClusterActionEnum {
    FailoverDBCluster = "FailoverDBCluster"
}
export declare enum POSTFailoverDBClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTFailoverDBClusterRequest extends SpeakeasyBase {
    action: POSTFailoverDBClusterActionEnum;
    requestBody?: Uint8Array;
    version: POSTFailoverDBClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTFailoverDBClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
