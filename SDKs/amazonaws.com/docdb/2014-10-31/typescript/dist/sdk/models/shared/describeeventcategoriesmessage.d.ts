import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Represents the input to <a>DescribeEventCategories</a>.
 */
export declare class DescribeEventCategoriesMessage extends SpeakeasyBase {
    filters?: FilterList[];
    sourceType?: string;
}
