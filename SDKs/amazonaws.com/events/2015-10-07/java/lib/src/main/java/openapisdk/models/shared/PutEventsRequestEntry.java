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
 * PutEventsRequestEntry
 * Represents an event to be submitted.
**/
public class PutEventsRequestEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Detail")
    public String detail;
    public PutEventsRequestEntry withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetailType")
    public String detailType;
    public PutEventsRequestEntry withDetailType(String detailType) {
        this.detailType = detailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBusName")
    public String eventBusName;
    public PutEventsRequestEntry withEventBusName(String eventBusName) {
        this.eventBusName = eventBusName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resources")
    public String[] resources;
    public PutEventsRequestEntry withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Source")
    public String source;
    public PutEventsRequestEntry withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Time")
    public OffsetDateTime time;
    public PutEventsRequestEntry withTime(OffsetDateTime time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TraceHeader")
    public String traceHeader;
    public PutEventsRequestEntry withTraceHeader(String traceHeader) {
        this.traceHeader = traceHeader;
        return this;
    }
}