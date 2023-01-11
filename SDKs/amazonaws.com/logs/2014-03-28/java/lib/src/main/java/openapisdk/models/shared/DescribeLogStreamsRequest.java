package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLogStreamsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descending")
    public Boolean descending;
    public DescribeLogStreamsRequest withDescending(Boolean descending) {
        this.descending = descending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public DescribeLogStreamsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonProperty("logGroupName")
    public String logGroupName;
    public DescribeLogStreamsRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logStreamNamePrefix")
    public String logStreamNamePrefix;
    public DescribeLogStreamsRequest withLogStreamNamePrefix(String logStreamNamePrefix) {
        this.logStreamNamePrefix = logStreamNamePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeLogStreamsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public OrderByEnum orderBy;
    public DescribeLogStreamsRequest withOrderBy(OrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
}