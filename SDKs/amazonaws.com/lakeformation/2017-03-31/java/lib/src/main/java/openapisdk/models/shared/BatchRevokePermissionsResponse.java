package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchRevokePermissionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Failures")
    public BatchPermissionsFailureEntry[] failures;
    public BatchRevokePermissionsResponse withFailures(BatchPermissionsFailureEntry[] failures) {
        this.failures = failures;
        return this;
    }
}