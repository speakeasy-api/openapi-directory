package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeGameSessionQueuesInput
 * Represents the input for a request operation.
**/
public class DescribeGameSessionQueuesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeGameSessionQueuesInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Names")
    public String[] names;
    public DescribeGameSessionQueuesInput withNames(String[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeGameSessionQueuesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}