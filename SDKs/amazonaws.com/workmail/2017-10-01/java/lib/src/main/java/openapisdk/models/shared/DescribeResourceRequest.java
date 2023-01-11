package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeResourceRequest {
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DescribeResourceRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public DescribeResourceRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}