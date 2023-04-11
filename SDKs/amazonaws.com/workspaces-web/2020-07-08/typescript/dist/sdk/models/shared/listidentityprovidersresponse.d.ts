import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderSummary } from "./identityprovidersummary";
/**
 * Success
 */
export declare class ListIdentityProvidersResponse extends SpeakeasyBase {
    identityProviders?: IdentityProviderSummary[];
    nextToken?: string;
}
