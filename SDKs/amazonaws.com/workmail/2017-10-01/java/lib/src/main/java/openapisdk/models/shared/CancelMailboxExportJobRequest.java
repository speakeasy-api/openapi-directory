package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelMailboxExportJobRequest {
    @JsonProperty("ClientToken")
    public String clientToken;
    public CancelMailboxExportJobRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("JobId")
    public String jobId;
    public CancelMailboxExportJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public CancelMailboxExportJobRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}