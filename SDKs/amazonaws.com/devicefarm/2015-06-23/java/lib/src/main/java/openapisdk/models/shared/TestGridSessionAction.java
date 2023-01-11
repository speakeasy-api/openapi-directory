package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * TestGridSessionAction
 * An action taken by a <a>TestGridSession</a> browser instance.
**/
public class TestGridSessionAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public TestGridSessionAction withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public TestGridSessionAction withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMethod")
    public String requestMethod;
    public TestGridSessionAction withRequestMethod(String requestMethod) {
        this.requestMethod = requestMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("started")
    public OffsetDateTime started;
    public TestGridSessionAction withStarted(OffsetDateTime started) {
        this.started = started;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public String statusCode;
    public TestGridSessionAction withStatusCode(String statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}