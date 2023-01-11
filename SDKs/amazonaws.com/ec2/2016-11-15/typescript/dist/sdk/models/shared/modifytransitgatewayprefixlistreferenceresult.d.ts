import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the transit gateway attachment.
**/
export declare class ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment extends SpeakeasyBase {
    resourceId?: Record<string, any>;
    resourceType?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
}
/**
 * Information about the prefix list reference.
**/
export declare class ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference extends SpeakeasyBase {
    blackhole?: Record<string, any>;
    prefixListId?: Record<string, any>;
    prefixListOwnerId?: Record<string, any>;
    state?: Record<string, any>;
    transitGatewayAttachment?: ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment;
    transitGatewayRouteTableId?: Record<string, any>;
}
export declare class ModifyTransitGatewayPrefixListReferenceResult extends SpeakeasyBase {
    transitGatewayPrefixListReference?: ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference;
}
