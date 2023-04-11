import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Represents the input to <a>ListTagsForResource</a>.
 */
export declare class ListTagsForResourceMessage extends SpeakeasyBase {
    filters?: FilterList[];
    resourceName: string;
}
