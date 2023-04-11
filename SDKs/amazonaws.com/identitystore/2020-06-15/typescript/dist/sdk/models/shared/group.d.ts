import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalId } from "./externalid";
/**
 * A group object that contains a specified group’s metadata and attributes.
 */
export declare class Group extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    externalIds?: ExternalId[];
    groupId: string;
    identityStoreId: string;
}
