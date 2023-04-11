import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateTransitGatewayRouteTableAnnouncementActionEnum {
    CreateTransitGatewayRouteTableAnnouncement = "CreateTransitGatewayRouteTableAnnouncement"
}
export declare enum POSTCreateTransitGatewayRouteTableAnnouncementVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateTransitGatewayRouteTableAnnouncementRequest extends SpeakeasyBase {
    action: POSTCreateTransitGatewayRouteTableAnnouncementActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateTransitGatewayRouteTableAnnouncementVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateTransitGatewayRouteTableAnnouncementResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
