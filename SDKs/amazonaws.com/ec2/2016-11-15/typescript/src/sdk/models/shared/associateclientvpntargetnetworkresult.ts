import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociateClientVpnTargetNetworkResultStatus
/** 
 * The current state of the target network association.
**/
export class AssociateClientVpnTargetNetworkResultStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


export class AssociateClientVpnTargetNetworkResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: AssociateClientVpnTargetNetworkResultStatus;
}
