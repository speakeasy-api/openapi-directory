import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderConfig } from "./identityproviderconfig";
/**
 * Success
 */
export declare class ListIdentityProviderConfigsResponse extends SpeakeasyBase {
    identityProviderConfigs?: IdentityProviderConfig[];
    nextToken?: string;
}
