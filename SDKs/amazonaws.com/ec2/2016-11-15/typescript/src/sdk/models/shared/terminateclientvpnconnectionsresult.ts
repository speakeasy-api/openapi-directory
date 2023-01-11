import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TerminateClientVpnConnectionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientVpnEndpointId?: Record<string, any>;

  @SpeakeasyMetadata()
  connectionStatuses?: Record<string, any>;

  @SpeakeasyMetadata()
  username?: Record<string, any>;
}
