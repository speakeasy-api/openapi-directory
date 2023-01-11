package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetJobManifestRequest {
    @JsonProperty("JobId")
    public String jobId;
    public GetJobManifestRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}