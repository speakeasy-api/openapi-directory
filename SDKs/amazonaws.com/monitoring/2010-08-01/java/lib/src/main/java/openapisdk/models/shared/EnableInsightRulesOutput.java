package openapisdk.models.shared;



public class EnableInsightRulesOutput {
    public PartialFailure[] failures;
    public EnableInsightRulesOutput withFailures(PartialFailure[] failures) {
        this.failures = failures;
        return this;
    }
}