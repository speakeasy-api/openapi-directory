package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProvisioningTemplateVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListProvisioningTemplateVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versions")
    public ProvisioningTemplateVersionSummary[] versions;
    public ListProvisioningTemplateVersionsResponse withVersions(ProvisioningTemplateVersionSummary[] versions) {
        this.versions = versions;
        return this;
    }
}