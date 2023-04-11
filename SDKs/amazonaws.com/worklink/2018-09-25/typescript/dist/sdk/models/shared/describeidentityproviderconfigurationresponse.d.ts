import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
/**
 * Success
 */
export declare class DescribeIdentityProviderConfigurationResponse extends SpeakeasyBase {
    identityProviderSamlMetadata?: string;
    identityProviderType?: IdentityProviderTypeEnum;
    serviceProviderSamlMetadata?: string;
}
