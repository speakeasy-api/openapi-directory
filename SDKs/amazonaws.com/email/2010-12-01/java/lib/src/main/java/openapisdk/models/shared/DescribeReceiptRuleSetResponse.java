package openapisdk.models.shared;



/**
 * DescribeReceiptRuleSetResponse
 * Represents the details of the specified receipt rule set.
**/
public class DescribeReceiptRuleSetResponse {
    public ReceiptRuleSetMetadata metadata;
    public DescribeReceiptRuleSetResponse withMetadata(ReceiptRuleSetMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    public ReceiptRule[] rules;
    public DescribeReceiptRuleSetResponse withRules(ReceiptRule[] rules) {
        this.rules = rules;
        return this;
    }
}