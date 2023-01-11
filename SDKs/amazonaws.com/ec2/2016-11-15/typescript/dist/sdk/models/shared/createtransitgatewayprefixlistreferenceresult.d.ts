import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the transit gateway attachment.
**/
export declare class CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment extends SpeakeasyBase {
    resourceId?: Record<string, any>;
    resourceType?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
}
/**
 * Information about the prefix list reference.
**/
export declare class CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference extends SpeakeasyBase {
    blackhole?: Record<string, any>;
    prefixListId?: Record<string, any>;
    prefixListOwnerId?: Record<string, any>;
    state?: Record<string, any>;
    transitGatewayAttachment?: CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment;
    transitGatewayRouteTableId?: Record<string, any>;
}
export declare class CreateTransitGatewayPrefixListReferenceResult extends SpeakeasyBase {
    transitGatewayPrefixListReference?: CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference;
}
