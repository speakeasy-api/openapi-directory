package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLogGroupFieldsRequest {
    @JsonProperty("logGroupName")
    public String logGroupName;
    public GetLogGroupFieldsRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Long time;
    public GetLogGroupFieldsRequest withTime(Long time) {
        this.time = time;
        return this;
    }
}