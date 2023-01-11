package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetTrackTrackingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public openapisdk.models.shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin destination;
    public GetTrackTrackingResponse withDestination(openapisdk.models.shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fdcOrderId")
    public Long fdcOrderId;
    public GetTrackTrackingResponse withFdcOrderId(Long fdcOrderId) {
        this.fdcOrderId = fdcOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("firstCheckedDateTime")
    public OffsetDateTime firstCheckedDateTime;
    public GetTrackTrackingResponse withFirstCheckedDateTime(OffsetDateTime firstCheckedDateTime) {
        this.firstCheckedDateTime = firstCheckedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("firstTransitEvent")
    public OffsetDateTime firstTransitEvent;
    public GetTrackTrackingResponse withFirstTransitEvent(OffsetDateTime firstTransitEvent) {
        this.firstTransitEvent = firstTransitEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastCheckedDateTime")
    public OffsetDateTime lastCheckedDateTime;
    public GetTrackTrackingResponse withLastCheckedDateTime(OffsetDateTime lastCheckedDateTime) {
        this.lastCheckedDateTime = lastCheckedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public GetTrackTrackingResponse withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public GetTrackTrackingResponseFeature origin;
    public GetTrackTrackingResponse withOrigin(GetTrackTrackingResponseFeature origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetTrackTrackingResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCategoryCode")
    public Long statusCategoryCode;
    public GetTrackTrackingResponse withStatusCategoryCode(Long statusCategoryCode) {
        this.statusCategoryCode = statusCategoryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("statusDateTime")
    public OffsetDateTime statusDateTime;
    public GetTrackTrackingResponse withStatusDateTime(OffsetDateTime statusDateTime) {
        this.statusDateTime = statusDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public GetTrackTrackingResponse withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackedEvents")
    public GetTrackTrackingResponseTrackingEventV2[] trackedEvents;
    public GetTrackTrackingResponse withTrackedEvents(GetTrackTrackingResponseTrackingEventV2[] trackedEvents) {
        this.trackedEvents = trackedEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingNumber")
    public GetTrackTrackingResponseTrackingNumberV2 trackingNumber;
    public GetTrackTrackingResponse withTrackingNumber(GetTrackTrackingResponseTrackingNumberV2 trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
}