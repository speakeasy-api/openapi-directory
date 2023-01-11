package openapisdk.models.shared;



public class DescribeInsightRulesOutput {
    public InsightRule[] insightRules;
    public DescribeInsightRulesOutput withInsightRules(InsightRule[] insightRules) {
        this.insightRules = insightRules;
        return this;
    }
    public String nextToken;
    public DescribeInsightRulesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}