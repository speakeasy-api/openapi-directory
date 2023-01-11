package openapisdk.models.shared;



/**
 * SimulatePolicyResponse
 * Contains the response to a successful <a>SimulatePrincipalPolicy</a> or <a>SimulateCustomPolicy</a> request.
**/
public class SimulatePolicyResponse {
    public EvaluationResult[] evaluationResults;
    public SimulatePolicyResponse withEvaluationResults(EvaluationResult[] evaluationResults) {
        this.evaluationResults = evaluationResults;
        return this;
    }
    public Boolean isTruncated;
    public SimulatePolicyResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public SimulatePolicyResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}