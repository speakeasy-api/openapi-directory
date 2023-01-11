package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListChannelsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterByName")
    public String filterByName;
    public ListChannelsRequestBody withFilterByName(String filterByName) {
        this.filterByName = filterByName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterByRecordingConfigurationArn")
    public String filterByRecordingConfigurationArn;
    public ListChannelsRequestBody withFilterByRecordingConfigurationArn(String filterByRecordingConfigurationArn) {
        this.filterByRecordingConfigurationArn = filterByRecordingConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListChannelsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListChannelsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}