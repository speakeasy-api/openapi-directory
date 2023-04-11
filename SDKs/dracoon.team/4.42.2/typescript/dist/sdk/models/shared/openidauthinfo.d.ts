import { SpeakeasyBase } from "../../../internal/utils";
import { OpenIdProvider } from "./openidprovider";
/**
 * List of OpenID Connect providers
 */
export declare class OpenIdAuthInfo extends SpeakeasyBase {
    /**
     * List of available OpenID Connect identity providers
     */
    items: OpenIdProvider[];
}
