import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalId } from "./externalid";
import { UniqueAttribute } from "./uniqueattribute";
/**
 * A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute. For example, a unique <code>GroupDisplayName</code>.
 */
export declare class AlternateIdentifier extends SpeakeasyBase {
    externalId?: ExternalId;
    uniqueAttribute?: UniqueAttribute;
}
