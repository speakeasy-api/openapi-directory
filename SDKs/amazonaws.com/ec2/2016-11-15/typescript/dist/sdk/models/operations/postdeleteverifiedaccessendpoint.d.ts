import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteVerifiedAccessEndpointActionEnum {
    DeleteVerifiedAccessEndpoint = "DeleteVerifiedAccessEndpoint"
}
export declare enum POSTDeleteVerifiedAccessEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteVerifiedAccessEndpointRequest extends SpeakeasyBase {
    action: POSTDeleteVerifiedAccessEndpointActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteVerifiedAccessEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteVerifiedAccessEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
