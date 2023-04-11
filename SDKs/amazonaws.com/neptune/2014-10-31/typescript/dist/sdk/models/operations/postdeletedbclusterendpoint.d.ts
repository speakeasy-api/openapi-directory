import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDBClusterEndpointActionEnum {
    DeleteDBClusterEndpoint = "DeleteDBClusterEndpoint"
}
export declare enum POSTDeleteDBClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDeleteDBClusterEndpointRequest extends SpeakeasyBase {
    action: POSTDeleteDBClusterEndpointActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDBClusterEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDBClusterEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
