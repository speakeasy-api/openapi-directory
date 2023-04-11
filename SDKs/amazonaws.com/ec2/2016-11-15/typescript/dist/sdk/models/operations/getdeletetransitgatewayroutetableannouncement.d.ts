import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteTransitGatewayRouteTableAnnouncementActionEnum {
    DeleteTransitGatewayRouteTableAnnouncement = "DeleteTransitGatewayRouteTableAnnouncement"
}
export declare enum GETDeleteTransitGatewayRouteTableAnnouncementVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeleteTransitGatewayRouteTableAnnouncementRequest extends SpeakeasyBase {
    action: GETDeleteTransitGatewayRouteTableAnnouncementActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The transit gateway route table ID that's being deleted.
     */
    transitGatewayRouteTableAnnouncementId: string;
    version: GETDeleteTransitGatewayRouteTableAnnouncementVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteTransitGatewayRouteTableAnnouncementResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
