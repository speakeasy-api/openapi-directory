import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
export declare class Profile extends SpeakeasyBase {
    /**
     * The type of Wi-Fi network. Possible values: **wpa-psk**, **wpa2-psk**, **wpa-eap**, **wpa2-eap**.
     */
    authType: string;
    /**
     * Indicates whether to automatically select the best authentication method available. Does not work on older terminal models.
     */
    autoWifi?: boolean;
    /**
     * Use **infra** for infrastructure-based networks. This applies to most networks. Use **adhoc** only if the communication is p2p-based between base stations.
     */
    bssType: string;
    /**
     * The channel number of the Wi-Fi network. The recommended setting is **0** for automatic channel selection.
     */
    channel?: number;
    /**
     * Indicates whether this is your preferred wireless network. If **true**, the terminal will try connecting to this network first.
     */
    defaultProfile?: boolean;
    /**
     * For `authType` **wpa-eap** or **wpa2-eap**. Possible values: **tls**, **peap**, **leap**, **fast**
     */
    eap?: string;
    eapCaCert?: File;
    eapClientCert?: File;
    eapClientKey?: File;
    /**
     * For `eap` **tls**. The password of the RSA key file, if that file is password-protected.
     */
    eapClientPwd?: string;
    /**
     * For `authType` **wpa-eap** or **wpa2-eap**. The EAP-PEAP username from your MS-CHAP account. Must match the configuration of your RADIUS server.
     */
    eapIdentity?: string;
    eapIntermediateCert?: File;
    /**
     * For `eap` **peap**. The EAP-PEAP password from your MS-CHAP account. Must match the configuration of your RADIUS server.
     */
    eapPwd?: string;
    /**
     * Indicates if the network doesn't broadcast its SSID. Mandatory for Android terminals, because these terminals rely on this setting to be able to connect to any network.
     */
    hiddenSsid?: boolean;
    /**
     * Your name for the Wi-Fi profile.
     */
    name?: string;
    /**
     * For `authType` **wpa-psk or **wpa2-psk**. The password to the wireless network.
     */
    psk?: string;
    /**
     * The name of the wireless network.
     */
    ssid: string;
    /**
     * The type of encryption. Possible values: **auto**, **ccmp** (recommended), **tkip**
     */
    wsec: string;
}
