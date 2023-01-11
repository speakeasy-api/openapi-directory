package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApplicationVersionsRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public ListApplicationVersionsRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListApplicationVersionsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListApplicationVersionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}