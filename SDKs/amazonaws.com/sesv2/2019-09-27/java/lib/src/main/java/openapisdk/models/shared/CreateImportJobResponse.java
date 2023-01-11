package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateImportJobResponse
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
**/
public class CreateImportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobId")
    public String jobId;
    public CreateImportJobResponse withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}