import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateVerifiedAccessEndpointActionEnum {
    CreateVerifiedAccessEndpoint = "CreateVerifiedAccessEndpoint"
}
export declare enum POSTCreateVerifiedAccessEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateVerifiedAccessEndpointRequest extends SpeakeasyBase {
    action: POSTCreateVerifiedAccessEndpointActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateVerifiedAccessEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateVerifiedAccessEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
