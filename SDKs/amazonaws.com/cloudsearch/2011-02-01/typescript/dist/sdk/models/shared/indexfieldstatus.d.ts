import { SpeakeasyBase } from "../../../internal/utils";
import { IndexField } from "./indexfield";
import { OptionStatus } from "./optionstatus";
/**
 * The value of an <code>IndexField</code> and its current status.
 */
export declare class IndexFieldStatus extends SpeakeasyBase {
    /**
     * Defines a field in the index, including its name, type, and the source of its data. The <code>IndexFieldType</code> indicates which of the options will be present. It is invalid to specify options for a type other than the <code>IndexFieldType</code>.
     */
    options: IndexField;
    /**
     * The status of an option, including when it was last updated and whether it is actively in use for searches.
     */
    status: OptionStatus;
}
