import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderEnum } from "./identityproviderenum";
import { RegistryTypeEnum } from "./registrytypeenum";
/**
 * Contains summary information about the specified CloudFormation extension.
 */
export declare class TypeSummary extends SpeakeasyBase {
    defaultVersionId?: string;
    description?: string;
    isActivated?: boolean;
    lastUpdated?: Date;
    latestPublicVersion?: string;
    originalTypeName?: string;
    publicVersionNumber?: string;
    publisherId?: string;
    publisherIdentity?: IdentityProviderEnum;
    publisherName?: string;
    type?: RegistryTypeEnum;
    typeArn?: string;
    typeName?: string;
}
