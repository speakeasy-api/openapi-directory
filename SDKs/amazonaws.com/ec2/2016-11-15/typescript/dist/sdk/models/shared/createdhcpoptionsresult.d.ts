import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a value for a resource attribute that is a String.
 */
export declare class CreateDhcpOptionsResultDhcpOptionsDhcpConfigurationsValues extends SpeakeasyBase {
    value?: string;
}
/**
 * Describes a DHCP configuration option.
 */
export declare class CreateDhcpOptionsResultDhcpOptionsDhcpConfigurations extends SpeakeasyBase {
    key?: string;
    values?: CreateDhcpOptionsResultDhcpOptionsDhcpConfigurationsValues[];
}
/**
 * Describes a tag.
 */
export declare class CreateDhcpOptionsResultDhcpOptionsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * A set of DHCP options.
 */
export declare class CreateDhcpOptionsResultDhcpOptions extends SpeakeasyBase {
    dhcpConfigurations?: CreateDhcpOptionsResultDhcpOptionsDhcpConfigurations[];
    dhcpOptionsId?: string;
    ownerId?: string;
    tags?: CreateDhcpOptionsResultDhcpOptionsTags[];
}
/**
 * Success
 */
export declare class CreateDhcpOptionsResult extends SpeakeasyBase {
    dhcpOptions?: CreateDhcpOptionsResultDhcpOptions;
}
