import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of DHCP options.
**/
export declare class CreateDhcpOptionsResultDhcpOptions extends SpeakeasyBase {
    dhcpConfigurations?: Record<string, any>;
    dhcpOptionsId?: Record<string, any>;
    ownerId?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class CreateDhcpOptionsResult extends SpeakeasyBase {
    dhcpOptions?: CreateDhcpOptionsResultDhcpOptions;
}
