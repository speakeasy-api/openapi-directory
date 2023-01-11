import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment
/** 
 * Information about the transit gateway attachment.
**/
export class DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: Record<string, any>;

  @SpeakeasyMetadata()
  resourceType?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: Record<string, any>;
}


// DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
/** 
 * Information about the deleted prefix list reference.
**/
export class DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blackhole?: Record<string, any>;

  @SpeakeasyMetadata()
  prefixListId?: Record<string, any>;

  @SpeakeasyMetadata()
  prefixListOwnerId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachment?: DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: Record<string, any>;
}


export class DeleteTransitGatewayPrefixListReferenceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayPrefixListReference?: DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference;
}
