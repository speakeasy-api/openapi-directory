package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEnvironmentTemplatesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListEnvironmentTemplatesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("templates")
    public EnvironmentTemplateSummary[] templates;
    public ListEnvironmentTemplatesOutput withTemplates(EnvironmentTemplateSummary[] templates) {
        this.templates = templates;
        return this;
    }
}