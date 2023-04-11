import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A named set of filter values, used to return a more specific list of results. You can use a filter to match a set of resources by specific criteria, such as IDs.</p> <p>Wildcards are not supported in filters.</p>
 */
export declare class FilterList extends SpeakeasyBase {
    name: string;
    values: string[];
}
