import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateVpnConnectionResultVpnConnectionOptions
/** 
 * The VPN connection options.
**/
export class CreateVpnConnectionResultVpnConnectionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enableAcceleration?: Record<string, any>;

  @SpeakeasyMetadata()
  localIpv4NetworkCidr?: Record<string, any>;

  @SpeakeasyMetadata()
  localIpv6NetworkCidr?: Record<string, any>;

  @SpeakeasyMetadata()
  remoteIpv4NetworkCidr?: Record<string, any>;

  @SpeakeasyMetadata()
  remoteIpv6NetworkCidr?: Record<string, any>;

  @SpeakeasyMetadata()
  staticRoutesOnly?: Record<string, any>;

  @SpeakeasyMetadata()
  tunnelInsideIpVersion?: Record<string, any>;

  @SpeakeasyMetadata()
  tunnelOptions?: Record<string, any>;
}


// CreateVpnConnectionResultVpnConnection
/** 
 * Information about the VPN connection.
**/
export class CreateVpnConnectionResultVpnConnection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  category?: Record<string, any>;

  @SpeakeasyMetadata()
  customerGatewayConfiguration?: Record<string, any>;

  @SpeakeasyMetadata()
  customerGatewayId?: Record<string, any>;

  @SpeakeasyMetadata()
  options?: CreateVpnConnectionResultVpnConnectionOptions;

  @SpeakeasyMetadata()
  routes?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayId?: Record<string, any>;

  @SpeakeasyMetadata()
  type?: Record<string, any>;

  @SpeakeasyMetadata()
  vgwTelemetry?: Record<string, any>;

  @SpeakeasyMetadata()
  vpnConnectionId?: Record<string, any>;

  @SpeakeasyMetadata()
  vpnGatewayId?: Record<string, any>;
}


// CreateVpnConnectionResult
/** 
 * Contains the output of CreateVpnConnection.
**/
export class CreateVpnConnectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpnConnection?: CreateVpnConnectionResultVpnConnection;
}
