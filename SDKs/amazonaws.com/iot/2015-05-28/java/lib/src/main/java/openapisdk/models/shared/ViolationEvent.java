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
 * ViolationEvent
 * Information about a Device Defender security profile behavior violation.
**/
public class ViolationEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("behavior")
    public Behavior behavior;
    public ViolationEvent withBehavior(Behavior behavior) {
        this.behavior = behavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricValue")
    public MetricValue metricValue;
    public ViolationEvent withMetricValue(MetricValue metricValue) {
        this.metricValue = metricValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileName")
    public String securityProfileName;
    public ViolationEvent withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public ViolationEvent withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationEventAdditionalInfo")
    public ViolationEventAdditionalInfo violationEventAdditionalInfo;
    public ViolationEvent withViolationEventAdditionalInfo(ViolationEventAdditionalInfo violationEventAdditionalInfo) {
        this.violationEventAdditionalInfo = violationEventAdditionalInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("violationEventTime")
    public OffsetDateTime violationEventTime;
    public ViolationEvent withViolationEventTime(OffsetDateTime violationEventTime) {
        this.violationEventTime = violationEventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationEventType")
    public ViolationEventTypeEnum violationEventType;
    public ViolationEvent withViolationEventType(ViolationEventTypeEnum violationEventType) {
        this.violationEventType = violationEventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationId")
    public String violationId;
    public ViolationEvent withViolationId(String violationId) {
        this.violationId = violationId;
        return this;
    }
}