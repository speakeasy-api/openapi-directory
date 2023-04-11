import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * <p/>
 */
export declare class ListTagsForResourceMessage extends SpeakeasyBase {
    filters?: FilterList[];
    resourceName: string;
}
