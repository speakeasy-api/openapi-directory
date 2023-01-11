package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPartnerEventSourcesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListPartnerEventSourcesRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonProperty("NamePrefix")
    public String namePrefix;
    public ListPartnerEventSourcesRequest withNamePrefix(String namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPartnerEventSourcesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}