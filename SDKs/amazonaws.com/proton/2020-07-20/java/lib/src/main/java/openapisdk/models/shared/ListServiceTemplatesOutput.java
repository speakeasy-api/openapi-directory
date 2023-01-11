package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceTemplatesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListServiceTemplatesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("templates")
    public ServiceTemplateSummary[] templates;
    public ListServiceTemplatesOutput withTemplates(ServiceTemplateSummary[] templates) {
        this.templates = templates;
        return this;
    }
}