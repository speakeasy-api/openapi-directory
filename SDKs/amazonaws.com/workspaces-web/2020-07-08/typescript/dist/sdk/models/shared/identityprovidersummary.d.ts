import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
/**
 * The summary of the identity provider.
 */
export declare class IdentityProviderSummary extends SpeakeasyBase {
    identityProviderArn?: string;
    identityProviderName?: string;
    identityProviderType?: IdentityProviderTypeEnum;
}
