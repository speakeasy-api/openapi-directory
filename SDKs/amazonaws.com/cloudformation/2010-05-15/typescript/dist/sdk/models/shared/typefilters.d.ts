import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryEnum } from "./categoryenum";
/**
 * Filter criteria to use in determining which extensions to return.
 */
export declare class TypeFilters extends SpeakeasyBase {
    category?: CategoryEnum;
    publisherId?: string;
    typeNamePrefix?: string;
}
