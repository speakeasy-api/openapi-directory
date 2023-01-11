import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment
/** 
 * Information about the transit gateway attachment.
**/
export class ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: Record<string, any>;

  @SpeakeasyMetadata()
  resourceType?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: Record<string, any>;
}


// ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
/** 
 * Information about the prefix list reference.
**/
export class ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blackhole?: Record<string, any>;

  @SpeakeasyMetadata()
  prefixListId?: Record<string, any>;

  @SpeakeasyMetadata()
  prefixListOwnerId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachment?: ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: Record<string, any>;
}


export class ModifyTransitGatewayPrefixListReferenceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayPrefixListReference?: ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference;
}
