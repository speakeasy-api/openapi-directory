import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETVpnConnectionDeviceSampleConfigurationActionEnum {
    GetVpnConnectionDeviceSampleConfiguration = "GetVpnConnectionDeviceSampleConfiguration"
}
export declare enum GETGETVpnConnectionDeviceSampleConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETGETVpnConnectionDeviceSampleConfigurationRequest extends SpeakeasyBase {
    action: GETGETVpnConnectionDeviceSampleConfigurationActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The IKE version to be used in the sample configuration file for your customer gateway device. You can specify one of the following versions: <code>ikev1</code> or <code>ikev2</code>.
     */
    internetKeyExchangeVersion?: string;
    version: GETGETVpnConnectionDeviceSampleConfigurationVersionEnum;
    /**
     * Device identifier provided by the <code>GetVpnConnectionDeviceTypes</code> API.
     */
    vpnConnectionDeviceTypeId: string;
    /**
     * The <code>VpnConnectionId</code> specifies the Site-to-Site VPN connection used for the sample configuration.
     */
    vpnConnectionId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETVpnConnectionDeviceSampleConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
