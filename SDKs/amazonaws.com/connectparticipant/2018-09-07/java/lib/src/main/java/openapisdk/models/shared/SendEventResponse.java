package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendEventResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AbsoluteTime")
    public String absoluteTime;
    public SendEventResponse withAbsoluteTime(String absoluteTime) {
        this.absoluteTime = absoluteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public SendEventResponse withId(String id) {
        this.id = id;
        return this;
    }
}