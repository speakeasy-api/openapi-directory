package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchSystemTemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchSystemTemplatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summaries")
    public SystemTemplateSummary[] summaries;
    public SearchSystemTemplatesResponse withSummaries(SystemTemplateSummary[] summaries) {
        this.summaries = summaries;
        return this;
    }
}