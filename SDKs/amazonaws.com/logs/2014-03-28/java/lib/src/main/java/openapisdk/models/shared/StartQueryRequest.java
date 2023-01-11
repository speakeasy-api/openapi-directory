package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartQueryRequest {
    @JsonProperty("endTime")
    public Long endTime;
    public StartQueryRequest withEndTime(Long endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public StartQueryRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroupName")
    public String logGroupName;
    public StartQueryRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroupNames")
    public String[] logGroupNames;
    public StartQueryRequest withLogGroupNames(String[] logGroupNames) {
        this.logGroupNames = logGroupNames;
        return this;
    }
    @JsonProperty("queryString")
    public String queryString;
    public StartQueryRequest withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonProperty("startTime")
    public Long startTime;
    public StartQueryRequest withStartTime(Long startTime) {
        this.startTime = startTime;
        return this;
    }
}