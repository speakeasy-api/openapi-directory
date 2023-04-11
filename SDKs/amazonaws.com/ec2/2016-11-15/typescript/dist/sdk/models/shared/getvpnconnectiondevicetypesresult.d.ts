import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List of customer gateway devices that have a sample configuration file available for use. You can also see the list of device types with sample configuration files available under <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html">Your customer gateway device</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.
 */
export declare class GetVpnConnectionDeviceTypesResultVpnConnectionDeviceTypes extends SpeakeasyBase {
    platform?: string;
    software?: string;
    vendor?: string;
    vpnConnectionDeviceTypeId?: string;
}
/**
 * Success
 */
export declare class GetVpnConnectionDeviceTypesResult extends SpeakeasyBase {
    nextToken?: string;
    vpnConnectionDeviceTypes?: GetVpnConnectionDeviceTypesResultVpnConnectionDeviceTypes[];
}
