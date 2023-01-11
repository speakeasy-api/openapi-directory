package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWorldTemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListWorldTemplatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateSummaries")
    public TemplateSummary[] templateSummaries;
    public ListWorldTemplatesResponse withTemplateSummaries(TemplateSummary[] templateSummaries) {
        this.templateSummaries = templateSummaries;
        return this;
    }
}