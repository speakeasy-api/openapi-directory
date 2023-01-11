package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceTemplateVersionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListServiceTemplateVersionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("templateVersions")
    public ServiceTemplateVersionSummary[] templateVersions;
    public ListServiceTemplateVersionsOutput withTemplateVersions(ServiceTemplateVersionSummary[] templateVersions) {
        this.templateVersions = templateVersions;
        return this;
    }
}