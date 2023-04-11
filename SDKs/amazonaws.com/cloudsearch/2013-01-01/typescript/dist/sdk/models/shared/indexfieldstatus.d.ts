import { SpeakeasyBase } from "../../../internal/utils";
import { IndexField } from "./indexfield";
import { OptionStatus } from "./optionstatus";
/**
 * The value of an <code>IndexField</code> and its current status.
 */
export declare class IndexFieldStatus extends SpeakeasyBase {
    /**
     * Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.
     */
    options: IndexField;
    /**
     * The status of domain configuration option.
     */
    status: OptionStatus;
}
