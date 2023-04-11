import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateTransitGatewayMulticastDomainActionEnum {
    CreateTransitGatewayMulticastDomain = "CreateTransitGatewayMulticastDomain"
}
export declare enum POSTCreateTransitGatewayMulticastDomainVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
    action: POSTCreateTransitGatewayMulticastDomainActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateTransitGatewayMulticastDomainVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateTransitGatewayMulticastDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
