import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a value for a resource attribute that is a String.
 */
export declare class DescribeDhcpOptionsResultDhcpOptionsDhcpConfigurationsValues extends SpeakeasyBase {
    value?: string;
}
/**
 * Describes a DHCP configuration option.
 */
export declare class DescribeDhcpOptionsResultDhcpOptionsDhcpConfigurations extends SpeakeasyBase {
    key?: string;
    values?: DescribeDhcpOptionsResultDhcpOptionsDhcpConfigurationsValues[];
}
/**
 * Describes a tag.
 */
export declare class DescribeDhcpOptionsResultDhcpOptionsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a set of DHCP options.
 */
export declare class DescribeDhcpOptionsResultDhcpOptions extends SpeakeasyBase {
    dhcpConfigurations?: DescribeDhcpOptionsResultDhcpOptionsDhcpConfigurations[];
    dhcpOptionsId?: string;
    ownerId?: string;
    tags?: DescribeDhcpOptionsResultDhcpOptionsTags[];
}
/**
 * Success
 */
export declare class DescribeDhcpOptionsResult extends SpeakeasyBase {
    dhcpOptions?: DescribeDhcpOptionsResultDhcpOptions[];
    nextToken?: string;
}
