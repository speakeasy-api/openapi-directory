package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrganizationConformancePackResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationConformancePackArn")
    public String organizationConformancePackArn;
    public PutOrganizationConformancePackResponse withOrganizationConformancePackArn(String organizationConformancePackArn) {
        this.organizationConformancePackArn = organizationConformancePackArn;
        return this;
    }
}