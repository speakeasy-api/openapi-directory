import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
/**
 * The details for how to sort the data.
 */
export declare class SortDefinition extends SpeakeasyBase {
    key: string;
    sortOrder?: SortOrderEnum;
}
