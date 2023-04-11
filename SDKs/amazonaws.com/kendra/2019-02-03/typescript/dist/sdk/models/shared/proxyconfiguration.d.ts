import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the configuration information for a web proxy to connect to website hosts.
 */
export declare class ProxyConfiguration extends SpeakeasyBase {
    credentials?: string;
    host: string;
    port: number;
}
