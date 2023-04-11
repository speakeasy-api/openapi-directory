import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisableTransitGatewayRouteTablePropagationRequest extends SpeakeasyBase {
    dryRun?: boolean;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableAnnouncementId?: string;
    transitGatewayRouteTableId: string;
}
