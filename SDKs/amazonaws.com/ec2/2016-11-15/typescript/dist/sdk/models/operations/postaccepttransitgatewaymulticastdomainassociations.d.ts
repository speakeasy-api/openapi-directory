import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAcceptTransitGatewayMulticastDomainAssociationsActionEnum {
    AcceptTransitGatewayMulticastDomainAssociations = "AcceptTransitGatewayMulticastDomainAssociations"
}
export declare enum POSTAcceptTransitGatewayMulticastDomainAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAcceptTransitGatewayMulticastDomainAssociationsRequest extends SpeakeasyBase {
    action: POSTAcceptTransitGatewayMulticastDomainAssociationsActionEnum;
    requestBody?: Uint8Array;
    version: POSTAcceptTransitGatewayMulticastDomainAssociationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAcceptTransitGatewayMulticastDomainAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
