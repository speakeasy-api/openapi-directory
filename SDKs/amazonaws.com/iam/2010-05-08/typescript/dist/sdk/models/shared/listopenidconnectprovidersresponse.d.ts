import { SpeakeasyBase } from "../../../internal/utils";
import { OpenIDConnectProviderListEntry } from "./openidconnectproviderlistentry";
/**
 * Contains the response to a successful <a>ListOpenIDConnectProviders</a> request.
 */
export declare class ListOpenIDConnectProvidersResponse extends SpeakeasyBase {
    openIDConnectProviderList?: OpenIDConnectProviderListEntry[];
}
