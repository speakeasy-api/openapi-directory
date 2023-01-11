package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFragmentsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FragmentSelector")
    public ListFragmentsRequestBodyFragmentSelector fragmentSelector;
    public ListFragmentsRequestBody withFragmentSelector(ListFragmentsRequestBodyFragmentSelector fragmentSelector) {
        this.fragmentSelector = fragmentSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListFragmentsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFragmentsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamARN")
    public String streamARN;
    public ListFragmentsRequestBody withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public ListFragmentsRequestBody withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}