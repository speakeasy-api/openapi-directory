package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AbsoluteTime")
    public String absoluteTime;
    public SendMessageResponse withAbsoluteTime(String absoluteTime) {
        this.absoluteTime = absoluteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public SendMessageResponse withId(String id) {
        this.id = id;
        return this;
    }
}