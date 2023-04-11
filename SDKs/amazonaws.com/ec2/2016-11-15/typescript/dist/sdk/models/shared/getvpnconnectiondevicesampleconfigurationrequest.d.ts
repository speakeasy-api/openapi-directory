import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVpnConnectionDeviceSampleConfigurationRequest extends SpeakeasyBase {
    dryRun?: boolean;
    internetKeyExchangeVersion?: string;
    vpnConnectionDeviceTypeId: string;
    vpnConnectionId: string;
}
