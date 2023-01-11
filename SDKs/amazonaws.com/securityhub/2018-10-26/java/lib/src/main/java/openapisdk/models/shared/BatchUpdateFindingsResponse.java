package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchUpdateFindingsResponse {
    @JsonProperty("ProcessedFindings")
    public AwsSecurityFindingIdentifier[] processedFindings;
    public BatchUpdateFindingsResponse withProcessedFindings(AwsSecurityFindingIdentifier[] processedFindings) {
        this.processedFindings = processedFindings;
        return this;
    }
    @JsonProperty("UnprocessedFindings")
    public BatchUpdateFindingsUnprocessedFinding[] unprocessedFindings;
    public BatchUpdateFindingsResponse withUnprocessedFindings(BatchUpdateFindingsUnprocessedFinding[] unprocessedFindings) {
        this.unprocessedFindings = unprocessedFindings;
        return this;
    }
}