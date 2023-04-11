import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An attribute associated with an entitlement. Application entitlements work by matching a supported SAML 2.0 attribute name to a value when a user identity federates to an Amazon AppStream 2.0 SAML application.
 */
export declare class EntitlementAttribute extends SpeakeasyBase {
    name: string;
    value: string;
}
