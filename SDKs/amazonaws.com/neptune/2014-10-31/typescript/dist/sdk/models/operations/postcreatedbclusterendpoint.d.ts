import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDBClusterEndpointActionEnum {
    CreateDBClusterEndpoint = "CreateDBClusterEndpoint"
}
export declare enum POSTCreateDBClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTCreateDBClusterEndpointRequest extends SpeakeasyBase {
    action: POSTCreateDBClusterEndpointActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDBClusterEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDBClusterEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
