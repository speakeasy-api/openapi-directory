import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProvider } from "./identityprovider";
import { Settings } from "./settings";
/**
 * Describes an identity provider.
 */
export declare class IdentityProviderSummary extends SpeakeasyBase {
    failureMessage?: string;
    identityProvider: IdentityProvider;
    product: string;
    settings: Settings;
    status: string;
}
