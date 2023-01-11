package openapisdk.models.shared;



public class DisableInsightRulesOutput {
    public PartialFailure[] failures;
    public DisableInsightRulesOutput withFailures(PartialFailure[] failures) {
        this.failures = failures;
        return this;
    }
}