import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateVpcEndpointActionEnum {
    CreateVpcEndpoint = "CreateVpcEndpoint"
}
export declare enum POSTCreateVpcEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateVpcEndpointRequest extends SpeakeasyBase {
    action: POSTCreateVpcEndpointActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateVpcEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateVpcEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
