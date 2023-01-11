package openapisdk.models.shared;



public class DescribeRulesOutput {
    public String nextMarker;
    public DescribeRulesOutput withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    public Rule[] rules;
    public DescribeRulesOutput withRules(Rule[] rules) {
        this.rules = rules;
        return this;
    }
}