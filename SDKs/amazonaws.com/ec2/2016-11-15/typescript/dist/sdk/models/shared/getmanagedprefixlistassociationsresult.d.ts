import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the resource with which a prefix list is associated.
 */
export declare class GetManagedPrefixListAssociationsResultPrefixListAssociations extends SpeakeasyBase {
    resourceId?: string;
    resourceOwner?: string;
}
/**
 * Success
 */
export declare class GetManagedPrefixListAssociationsResult extends SpeakeasyBase {
    nextToken?: string;
    prefixListAssociations?: GetManagedPrefixListAssociationsResultPrefixListAssociations[];
}
