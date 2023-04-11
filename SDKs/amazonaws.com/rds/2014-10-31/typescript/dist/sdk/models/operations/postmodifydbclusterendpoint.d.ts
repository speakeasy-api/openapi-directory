import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyDBClusterEndpointActionEnum {
    ModifyDBClusterEndpoint = "ModifyDBClusterEndpoint"
}
export declare enum POSTModifyDBClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTModifyDBClusterEndpointRequest extends SpeakeasyBase {
    action: POSTModifyDBClusterEndpointActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyDBClusterEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyDBClusterEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
