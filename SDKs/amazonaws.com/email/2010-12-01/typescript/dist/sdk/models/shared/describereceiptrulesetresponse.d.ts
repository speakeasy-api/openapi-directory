import { SpeakeasyBase } from "../../../internal/utils";
import { ReceiptRule } from "./receiptrule";
import { ReceiptRuleSetMetadata } from "./receiptrulesetmetadata";
/**
 * Represents the details of the specified receipt rule set.
 */
export declare class DescribeReceiptRuleSetResponse extends SpeakeasyBase {
    metadata?: ReceiptRuleSetMetadata;
    rules?: ReceiptRule[];
}
