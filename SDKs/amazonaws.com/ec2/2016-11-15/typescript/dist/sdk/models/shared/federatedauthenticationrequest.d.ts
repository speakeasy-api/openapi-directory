import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The IAM SAML identity provider used for federated authentication.
 */
export declare class FederatedAuthenticationRequest extends SpeakeasyBase {
    samlProviderArn?: string;
    selfServiceSAMLProviderArn?: string;
}
