package openapisdk.models.shared;



/**
 * ListReceiptRuleSetsResponse
 * A list of receipt rule sets that exist under your AWS account.
**/
public class ListReceiptRuleSetsResponse {
    public String nextToken;
    public ListReceiptRuleSetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public ReceiptRuleSetMetadata[] ruleSets;
    public ListReceiptRuleSetsResponse withRuleSets(ReceiptRuleSetMetadata[] ruleSets) {
        this.ruleSets = ruleSets;
        return this;
    }
}