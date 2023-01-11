package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StopUserImportJobRequest
 * Represents the request to stop the user import job.
**/
public class StopUserImportJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public StopUserImportJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public StopUserImportJobRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}