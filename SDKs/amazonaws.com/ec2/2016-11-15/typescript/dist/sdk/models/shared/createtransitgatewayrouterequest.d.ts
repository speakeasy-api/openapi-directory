import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateTransitGatewayRouteRequest extends SpeakeasyBase {
    blackhole?: boolean;
    destinationCidrBlock: string;
    dryRun?: boolean;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableId: string;
}
