import { SpeakeasyBase } from "../../../internal/utils";
import { AppVisibilityEnum } from "./appvisibilityenum";
import { EntitlementAttribute } from "./entitlementattribute";
/**
 * Specifies an entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.
 */
export declare class Entitlement extends SpeakeasyBase {
    appVisibility: AppVisibilityEnum;
    attributes: EntitlementAttribute[];
    createdTime?: Date;
    description?: string;
    lastModifiedTime?: Date;
    name: string;
    stackName: string;
}
