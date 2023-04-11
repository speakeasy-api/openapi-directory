import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteTransitGatewayMulticastDomainActionEnum {
    DeleteTransitGatewayMulticastDomain = "DeleteTransitGatewayMulticastDomain"
}
export declare enum POSTDeleteTransitGatewayMulticastDomainVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
    action: POSTDeleteTransitGatewayMulticastDomainActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteTransitGatewayMulticastDomainVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteTransitGatewayMulticastDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
