package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartDeploymentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public StartDeploymentRequestBody withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceUrl")
    public String sourceUrl;
    public StartDeploymentRequestBody withSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
}