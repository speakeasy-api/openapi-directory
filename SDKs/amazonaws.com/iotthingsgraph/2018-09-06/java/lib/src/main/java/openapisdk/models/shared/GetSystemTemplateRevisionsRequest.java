package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSystemTemplateRevisionsRequest {
    @JsonProperty("id")
    public String id;
    public GetSystemTemplateRevisionsRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetSystemTemplateRevisionsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetSystemTemplateRevisionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}