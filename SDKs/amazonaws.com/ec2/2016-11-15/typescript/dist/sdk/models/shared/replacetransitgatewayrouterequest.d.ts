import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReplaceTransitGatewayRouteRequest extends SpeakeasyBase {
    blackhole?: boolean;
    destinationCidrBlock: string;
    dryRun?: boolean;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableId: string;
}
