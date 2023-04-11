import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProvider } from "./identityprovider";
/**
 * The summary of the user-based subscription products for a user.
 */
export declare class ProductUserSummary extends SpeakeasyBase {
    domain?: string;
    identityProvider: IdentityProvider;
    product: string;
    status: string;
    statusMessage?: string;
    subscriptionEndDate?: string;
    subscriptionStartDate?: string;
    username: string;
}
