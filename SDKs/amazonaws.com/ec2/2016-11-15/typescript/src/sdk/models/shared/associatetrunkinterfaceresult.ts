import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociateTrunkInterfaceResultInterfaceAssociation
/** 
 * Information about the association between the trunk network interface and branch network interface.
**/
export class AssociateTrunkInterfaceResultInterfaceAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  branchInterfaceId?: Record<string, any>;

  @SpeakeasyMetadata()
  greKey?: Record<string, any>;

  @SpeakeasyMetadata()
  interfaceProtocol?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  trunkInterfaceId?: Record<string, any>;

  @SpeakeasyMetadata()
  vlanId?: Record<string, any>;
}


export class AssociateTrunkInterfaceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: Record<string, any>;

  @SpeakeasyMetadata()
  interfaceAssociation?: AssociateTrunkInterfaceResultInterfaceAssociation;
}
