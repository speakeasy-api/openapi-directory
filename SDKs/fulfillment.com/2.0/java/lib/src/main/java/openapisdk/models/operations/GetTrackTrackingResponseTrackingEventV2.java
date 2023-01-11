package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetTrackTrackingResponseTrackingEventV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventCategory")
    public String eventCategory;
    public GetTrackTrackingResponseTrackingEventV2 withEventCategory(String eventCategory) {
        this.eventCategory = eventCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventCategoryCode")
    public Long eventCategoryCode;
    public GetTrackTrackingResponseTrackingEventV2 withEventCategoryCode(Long eventCategoryCode) {
        this.eventCategoryCode = eventCategoryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("eventDateTime")
    public OffsetDateTime eventDateTime;
    public GetTrackTrackingResponseTrackingEventV2 withEventDateTime(OffsetDateTime eventDateTime) {
        this.eventDateTime = eventDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventLocation")
    public openapisdk.models.shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin eventLocation;
    public GetTrackTrackingResponseTrackingEventV2 withEventLocation(openapisdk.models.shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin eventLocation) {
        this.eventLocation = eventLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventSource")
    public GetTrackTrackingResponseTrackingEventV2EventSourceEnum eventSource;
    public GetTrackTrackingResponseTrackingEventV2 withEventSource(GetTrackTrackingResponseTrackingEventV2EventSourceEnum eventSource) {
        this.eventSource = eventSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventStatus")
    public String eventStatus;
    public GetTrackTrackingResponseTrackingEventV2 withEventStatus(String eventStatus) {
        this.eventStatus = eventStatus;
        return this;
    }
}