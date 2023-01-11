package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetComplianceDetailsByResourceResponse
 * <p/>
**/
public class GetComplianceDetailsByResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationResults")
    public EvaluationResult[] evaluationResults;
    public GetComplianceDetailsByResourceResponse withEvaluationResults(EvaluationResult[] evaluationResults) {
        this.evaluationResults = evaluationResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetComplianceDetailsByResourceResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}