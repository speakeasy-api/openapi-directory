package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PutScheduledActionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public PutScheduledActionRequest withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public PutScheduledActionRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("ScalableDimension")
    public ScalableDimensionEnum scalableDimension;
    public PutScheduledActionRequest withScalableDimension(ScalableDimensionEnum scalableDimension) {
        this.scalableDimension = scalableDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalableTargetAction")
    public ScalableTargetAction scalableTargetAction;
    public PutScheduledActionRequest withScalableTargetAction(ScalableTargetAction scalableTargetAction) {
        this.scalableTargetAction = scalableTargetAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public String schedule;
    public PutScheduledActionRequest withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonProperty("ScheduledActionName")
    public String scheduledActionName;
    public PutScheduledActionRequest withScheduledActionName(String scheduledActionName) {
        this.scheduledActionName = scheduledActionName;
        return this;
    }
    @JsonProperty("ServiceNamespace")
    public ServiceNamespaceEnum serviceNamespace;
    public PutScheduledActionRequest withServiceNamespace(ServiceNamespaceEnum serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public PutScheduledActionRequest withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timezone")
    public String timezone;
    public PutScheduledActionRequest withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}