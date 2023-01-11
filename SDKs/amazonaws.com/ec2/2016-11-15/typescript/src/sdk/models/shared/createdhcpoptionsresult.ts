import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateDhcpOptionsResultDhcpOptions
/** 
 * A set of DHCP options.
**/
export class CreateDhcpOptionsResultDhcpOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dhcpConfigurations?: Record<string, any>;

  @SpeakeasyMetadata()
  dhcpOptionsId?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


export class CreateDhcpOptionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dhcpOptions?: CreateDhcpOptionsResultDhcpOptions;
}
