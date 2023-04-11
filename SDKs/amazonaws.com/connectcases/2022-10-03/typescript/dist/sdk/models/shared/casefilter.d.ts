import { SpeakeasyBase } from "../../../internal/utils";
import { FieldFilter } from "./fieldfilter";
/**
 * A filter for cases. Only one value can be provided.
 */
export declare class CaseFilter extends SpeakeasyBase {
    andAll?: CaseFilter[];
    field?: FieldFilter;
    /**
     * A filter for cases. Only one value can be provided.
     */
    not?: CaseFilter;
}
