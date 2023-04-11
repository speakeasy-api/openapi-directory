import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotAttributeToSortByEnum } from "./snapshotattributetosortbyenum";
import { SortByOrderEnum } from "./sortbyorderenum";
/**
 * Describes a sorting entity
 */
export declare class SnapshotSortingEntityList extends SpeakeasyBase {
    attribute: SnapshotAttributeToSortByEnum;
    sortOrder?: SortByOrderEnum;
}
