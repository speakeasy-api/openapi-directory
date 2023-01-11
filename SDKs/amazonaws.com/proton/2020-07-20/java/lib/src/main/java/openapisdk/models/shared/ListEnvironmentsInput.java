package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEnvironmentsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentTemplates")
    public EnvironmentTemplateFilter[] environmentTemplates;
    public ListEnvironmentsInput withEnvironmentTemplates(EnvironmentTemplateFilter[] environmentTemplates) {
        this.environmentTemplates = environmentTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListEnvironmentsInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListEnvironmentsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}