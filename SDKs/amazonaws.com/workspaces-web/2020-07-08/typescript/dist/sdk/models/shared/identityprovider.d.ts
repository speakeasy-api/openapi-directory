import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
/**
 * The identity provider.
 */
export declare class IdentityProvider extends SpeakeasyBase {
    identityProviderArn: string;
    identityProviderDetails?: Record<string, string>;
    identityProviderName?: string;
    identityProviderType?: IdentityProviderTypeEnum;
}
