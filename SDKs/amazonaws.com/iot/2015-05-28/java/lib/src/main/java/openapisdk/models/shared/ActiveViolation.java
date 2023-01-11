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
 * ActiveViolation
 * Information about an active Device Defender security profile behavior violation.
**/
public class ActiveViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("behavior")
    public Behavior behavior;
    public ActiveViolation withBehavior(Behavior behavior) {
        this.behavior = behavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastViolationTime")
    public OffsetDateTime lastViolationTime;
    public ActiveViolation withLastViolationTime(OffsetDateTime lastViolationTime) {
        this.lastViolationTime = lastViolationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastViolationValue")
    public MetricValue lastViolationValue;
    public ActiveViolation withLastViolationValue(MetricValue lastViolationValue) {
        this.lastViolationValue = lastViolationValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileName")
    public String securityProfileName;
    public ActiveViolation withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public ActiveViolation withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationEventAdditionalInfo")
    public ViolationEventAdditionalInfo violationEventAdditionalInfo;
    public ActiveViolation withViolationEventAdditionalInfo(ViolationEventAdditionalInfo violationEventAdditionalInfo) {
        this.violationEventAdditionalInfo = violationEventAdditionalInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationId")
    public String violationId;
    public ActiveViolation withViolationId(String violationId) {
        this.violationId = violationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("violationStartTime")
    public OffsetDateTime violationStartTime;
    public ActiveViolation withViolationStartTime(OffsetDateTime violationStartTime) {
        this.violationStartTime = violationStartTime;
        return this;
    }
}