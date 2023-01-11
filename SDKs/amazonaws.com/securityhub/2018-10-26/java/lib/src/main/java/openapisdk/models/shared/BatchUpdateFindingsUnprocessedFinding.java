package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchUpdateFindingsUnprocessedFinding
 * A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update.
**/
public class BatchUpdateFindingsUnprocessedFinding {
    @JsonProperty("ErrorCode")
    public String errorCode;
    public BatchUpdateFindingsUnprocessedFinding withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public BatchUpdateFindingsUnprocessedFinding withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonProperty("FindingIdentifier")
    public AwsSecurityFindingIdentifier findingIdentifier;
    public BatchUpdateFindingsUnprocessedFinding withFindingIdentifier(AwsSecurityFindingIdentifier findingIdentifier) {
        this.findingIdentifier = findingIdentifier;
        return this;
    }
}