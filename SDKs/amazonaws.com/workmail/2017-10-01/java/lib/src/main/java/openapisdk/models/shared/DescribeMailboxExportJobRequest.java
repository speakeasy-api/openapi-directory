package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeMailboxExportJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeMailboxExportJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DescribeMailboxExportJobRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}