import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the transit gateway attachment.
**/
export declare class DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment extends SpeakeasyBase {
    resourceId?: Record<string, any>;
    resourceType?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
}
/**
 * Information about the deleted prefix list reference.
**/
export declare class DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference extends SpeakeasyBase {
    blackhole?: Record<string, any>;
    prefixListId?: Record<string, any>;
    prefixListOwnerId?: Record<string, any>;
    state?: Record<string, any>;
    transitGatewayAttachment?: DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment;
    transitGatewayRouteTableId?: Record<string, any>;
}
export declare class DeleteTransitGatewayPrefixListReferenceResult extends SpeakeasyBase {
    transitGatewayPrefixListReference?: DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference;
}
