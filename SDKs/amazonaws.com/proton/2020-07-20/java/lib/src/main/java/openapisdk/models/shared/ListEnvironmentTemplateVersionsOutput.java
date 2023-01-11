package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEnvironmentTemplateVersionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListEnvironmentTemplateVersionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("templateVersions")
    public EnvironmentTemplateVersionSummary[] templateVersions;
    public ListEnvironmentTemplateVersionsOutput withTemplateVersions(EnvironmentTemplateVersionSummary[] templateVersions) {
        this.templateVersions = templateVersions;
        return this;
    }
}