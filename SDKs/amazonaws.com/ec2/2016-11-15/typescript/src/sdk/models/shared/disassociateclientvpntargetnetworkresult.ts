import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisassociateClientVpnTargetNetworkResultStatus
/** 
 * The current state of the target network association.
**/
export class DisassociateClientVpnTargetNetworkResultStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


export class DisassociateClientVpnTargetNetworkResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: DisassociateClientVpnTargetNetworkResultStatus;
}
