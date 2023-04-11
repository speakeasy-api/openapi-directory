import { SpeakeasyBase } from "../../../internal/utils";
import { ReceiptRule } from "./receiptrule";
import { ReceiptRuleSetMetadata } from "./receiptrulesetmetadata";
/**
 * Represents the metadata and receipt rules for the receipt rule set that is currently active.
 */
export declare class DescribeActiveReceiptRuleSetResponse extends SpeakeasyBase {
    metadata?: ReceiptRuleSetMetadata;
    rules?: ReceiptRule[];
}
