package openapisdk.models.shared;



public class DeleteInsightRulesOutput {
    public PartialFailure[] failures;
    public DeleteInsightRulesOutput withFailures(PartialFailure[] failures) {
        this.failures = failures;
        return this;
    }
}