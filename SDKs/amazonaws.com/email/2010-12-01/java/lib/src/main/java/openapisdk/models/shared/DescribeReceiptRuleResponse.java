package openapisdk.models.shared;



/**
 * DescribeReceiptRuleResponse
 * Represents the details of a receipt rule.
**/
public class DescribeReceiptRuleResponse {
    public ReceiptRule rule;
    public DescribeReceiptRuleResponse withRule(ReceiptRule rule) {
        this.rule = rule;
        return this;
    }
}