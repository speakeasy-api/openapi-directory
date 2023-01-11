import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment
/** 
 * Information about the transit gateway attachment.
**/
export class CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: Record<string, any>;

  @SpeakeasyMetadata()
  resourceType?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: Record<string, any>;
}


// CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
/** 
 * Information about the prefix list reference.
**/
export class CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blackhole?: Record<string, any>;

  @SpeakeasyMetadata()
  prefixListId?: Record<string, any>;

  @SpeakeasyMetadata()
  prefixListOwnerId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachment?: CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: Record<string, any>;
}


export class CreateTransitGatewayPrefixListReferenceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayPrefixListReference?: CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference;
}
