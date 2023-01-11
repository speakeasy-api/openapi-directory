package openapisdk.models.shared;



/**
 * DescribeActiveReceiptRuleSetResponse
 * Represents the metadata and receipt rules for the receipt rule set that is currently active.
**/
public class DescribeActiveReceiptRuleSetResponse {
    public ReceiptRuleSetMetadata metadata;
    public DescribeActiveReceiptRuleSetResponse withMetadata(ReceiptRuleSetMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    public ReceiptRule[] rules;
    public DescribeActiveReceiptRuleSetResponse withRules(ReceiptRule[] rules) {
        this.rules = rules;
        return this;
    }
}