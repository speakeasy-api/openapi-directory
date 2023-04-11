import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteTransitGatewayRouteTableAnnouncementActionEnum {
    DeleteTransitGatewayRouteTableAnnouncement = "DeleteTransitGatewayRouteTableAnnouncement"
}
export declare enum POSTDeleteTransitGatewayRouteTableAnnouncementVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteTransitGatewayRouteTableAnnouncementRequest extends SpeakeasyBase {
    action: POSTDeleteTransitGatewayRouteTableAnnouncementActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteTransitGatewayRouteTableAnnouncementVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteTransitGatewayRouteTableAnnouncementResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
