import { SpeakeasyBase } from "../../../internal/utils";
import { HostHeader } from "./hostheader";
export declare class LinuxSite extends SpeakeasyBase {
    /**
     * Host headers for the website.
     */
    hostHeaders?: HostHeader[];
    /**
     * Indicates whether http/2 protocol is enabled for the website.
     */
    http2Enabled?: boolean;
    /**
     * Indicates whether automatic https redirection is enabled for the website.
     */
    httpsRedirectEnabled?: boolean;
    /**
     * The name of the website.
     */
    name?: string;
    /**
     * The path of the website.
     */
    path?: string;
    /**
     * Indicates whether ssl is enabled for the website.
     */
    sslEnabled?: boolean;
}
