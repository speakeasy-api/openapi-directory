import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
/**
 * The optional clustering column portion of your primary key determines how the data is clustered and sorted within each partition.
 */
export declare class ClusteringKey extends SpeakeasyBase {
    name: string;
    orderBy: SortOrderEnum;
}
