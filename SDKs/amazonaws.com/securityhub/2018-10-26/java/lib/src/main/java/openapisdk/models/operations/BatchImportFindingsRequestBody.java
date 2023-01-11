package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchImportFindingsRequestBody {
    @JsonProperty("Findings")
    public openapisdk.models.shared.AwsSecurityFinding[] findings;
    public BatchImportFindingsRequestBody withFindings(openapisdk.models.shared.AwsSecurityFinding[] findings) {
        this.findings = findings;
        return this;
    }
}