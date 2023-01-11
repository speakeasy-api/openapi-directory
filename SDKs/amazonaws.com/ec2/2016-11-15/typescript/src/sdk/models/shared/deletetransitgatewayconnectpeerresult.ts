import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration
/** 
 * The Connect peer details.
**/
export class DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bgpConfigurations?: Record<string, any>;

  @SpeakeasyMetadata()
  insideCidrBlocks?: Record<string, any>;

  @SpeakeasyMetadata()
  peerAddress?: Record<string, any>;

  @SpeakeasyMetadata()
  protocol?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAddress?: Record<string, any>;
}


// DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer
/** 
 * Information about the deleted Connect peer.
**/
export class DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectPeerConfiguration?: DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration;

  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayConnectPeerId?: Record<string, any>;
}


export class DeleteTransitGatewayConnectPeerResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayConnectPeer?: DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer;
}
