import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeregisterTransitGatewayMulticastGroupSourcesActionEnum {
    DeregisterTransitGatewayMulticastGroupSources = "DeregisterTransitGatewayMulticastGroupSources"
}
export declare enum POSTDeregisterTransitGatewayMulticastGroupSourcesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeregisterTransitGatewayMulticastGroupSourcesRequest extends SpeakeasyBase {
    action: POSTDeregisterTransitGatewayMulticastGroupSourcesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeregisterTransitGatewayMulticastGroupSourcesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeregisterTransitGatewayMulticastGroupSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
