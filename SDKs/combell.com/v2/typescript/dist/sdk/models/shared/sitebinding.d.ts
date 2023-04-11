import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A site binding identifies a web domain.
 */
export declare class SiteBinding extends SpeakeasyBase {
    /**
     * The certificate thumbprint of the site binding.
     */
    certThumbprint?: string;
    /**
     * The host name of the site binding.
     */
    hostName?: string;
    /**
     * The IP address of the site binding.
     */
    ipAddress?: string;
    /**
     * The port of the site binding.
     */
    port?: number;
    /**
     * The protocol of the site binding.
     */
    protocol?: string;
    /**
     * Indicates whether ssl is enabled for the binding.
     */
    sslEnabled?: boolean;
}
