package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FilterLogEventsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public Long endTime;
    public FilterLogEventsRequest withEndTime(Long endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterPattern")
    public String filterPattern;
    public FilterLogEventsRequest withFilterPattern(String filterPattern) {
        this.filterPattern = filterPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interleaved")
    public java.util.Map<String, Object> interleaved;
    public FilterLogEventsRequest withInterleaved(java.util.Map<String, Object> interleaved) {
        this.interleaved = interleaved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public FilterLogEventsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonProperty("logGroupName")
    public String logGroupName;
    public FilterLogEventsRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logStreamNamePrefix")
    public String logStreamNamePrefix;
    public FilterLogEventsRequest withLogStreamNamePrefix(String logStreamNamePrefix) {
        this.logStreamNamePrefix = logStreamNamePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logStreamNames")
    public String[] logStreamNames;
    public FilterLogEventsRequest withLogStreamNames(String[] logStreamNames) {
        this.logStreamNames = logStreamNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public FilterLogEventsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public Long startTime;
    public FilterLogEventsRequest withStartTime(Long startTime) {
        this.startTime = startTime;
        return this;
    }
}