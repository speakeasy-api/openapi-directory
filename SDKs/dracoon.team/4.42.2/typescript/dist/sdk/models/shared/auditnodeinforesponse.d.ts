import { SpeakeasyBase } from "../../../internal/utils";
import { AuditNodeInfo } from "./auditnodeinfo";
import { Range } from "./range";
/**
 * OK
 */
export declare class AuditNodeInfoResponse extends SpeakeasyBase {
    /**
     * List of audit node info items
     */
    items: AuditNodeInfo[];
    /**
     * Range information
     */
    range: Range;
}
