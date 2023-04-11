import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The public route that is mapped to the container group. You can use this route to access your container group from the Internet.
 */
export declare class Route extends SpeakeasyBase {
    /**
     * The default system domain is mybluemix.net and already provides a SSL certificate, so you can access your container groups with HTTPS without any additional configuration.
     */
    domain?: string;
    /**
     * The host name of your container group, such as mycontainerhost. Do not include underscores (_) in the host name. The host and the domain combined form the full public route URL, such as http://mycontainerhost.mybluemix.net.
     */
    host?: string;
}
