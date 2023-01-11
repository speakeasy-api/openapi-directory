package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UploadSummary
 * This container provides summary information on an upload feed (not applicable for download feed types).
**/
public class UploadSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCount")
    public Integer failureCount;
    public UploadSummary withFailureCount(Integer failureCount) {
        this.failureCount = failureCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successCount")
    public Integer successCount;
    public UploadSummary withSuccessCount(Integer successCount) {
        this.successCount = successCount;
        return this;
    }
}