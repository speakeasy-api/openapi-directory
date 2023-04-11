import { SpeakeasyBase } from "../../../internal/utils";
import { ContactFilter } from "./contactfilter";
/**
 * The list of types of related items and their parameters to use for filtering.
 */
export declare class RelatedItemTypeFilter extends SpeakeasyBase {
    comment?: Record<string, any>;
    contact?: ContactFilter;
}
