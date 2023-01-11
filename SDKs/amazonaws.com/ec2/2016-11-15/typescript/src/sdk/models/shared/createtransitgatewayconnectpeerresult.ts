import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration
/** 
 * The Connect peer details.
**/
export class CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration extends SpeakeasyBase {
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


// CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer
/** 
 * Information about the Connect peer.
**/
export class CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectPeerConfiguration?: CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration;

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


export class CreateTransitGatewayConnectPeerResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayConnectPeer?: CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer;
}
