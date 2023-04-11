import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyTransitGatewayPrefixListReferenceRequest extends SpeakeasyBase {
    blackhole?: boolean;
    dryRun?: boolean;
    prefixListId: string;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableId: string;
}
