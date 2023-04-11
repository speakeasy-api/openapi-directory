import { SpeakeasyBase } from "../../../internal/utils";
import { SAMLProviderListEntry } from "./samlproviderlistentry";
/**
 * Contains the response to a successful <a>ListSAMLProviders</a> request.
 */
export declare class ListSAMLProvidersResponse extends SpeakeasyBase {
    samlProviderList?: SAMLProviderListEntry[];
}
