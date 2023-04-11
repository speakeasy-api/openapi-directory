import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRebootDBClusterActionEnum {
    RebootDBCluster = "RebootDBCluster"
}
export declare enum POSTRebootDBClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTRebootDBClusterRequest extends SpeakeasyBase {
    action: POSTRebootDBClusterActionEnum;
    requestBody?: Uint8Array;
    version: POSTRebootDBClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRebootDBClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
