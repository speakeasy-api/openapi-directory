package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchImportFindingsResponse {
    @JsonProperty("FailedCount")
    public Long failedCount;
    public BatchImportFindingsResponse withFailedCount(Long failedCount) {
        this.failedCount = failedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedFindings")
    public ImportFindingsError[] failedFindings;
    public BatchImportFindingsResponse withFailedFindings(ImportFindingsError[] failedFindings) {
        this.failedFindings = failedFindings;
        return this;
    }
    @JsonProperty("SuccessCount")
    public Long successCount;
    public BatchImportFindingsResponse withSuccessCount(Long successCount) {
        this.successCount = successCount;
        return this;
    }
}