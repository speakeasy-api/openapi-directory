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
 * ScalingPlan
 * Represents a scaling plan.
**/
public class ScalingPlan {
    @JsonProperty("ApplicationSource")
    public ApplicationSource applicationSource;
    public ScalingPlan withApplicationSource(ApplicationSource applicationSource) {
        this.applicationSource = applicationSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public ScalingPlan withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonProperty("ScalingInstructions")
    public ScalingInstruction[] scalingInstructions;
    public ScalingPlan withScalingInstructions(ScalingInstruction[] scalingInstructions) {
        this.scalingInstructions = scalingInstructions;
        return this;
    }
    @JsonProperty("ScalingPlanName")
    public String scalingPlanName;
    public ScalingPlan withScalingPlanName(String scalingPlanName) {
        this.scalingPlanName = scalingPlanName;
        return this;
    }
    @JsonProperty("ScalingPlanVersion")
    public Long scalingPlanVersion;
    public ScalingPlan withScalingPlanVersion(Long scalingPlanVersion) {
        this.scalingPlanVersion = scalingPlanVersion;
        return this;
    }
    @JsonProperty("StatusCode")
    public ScalingPlanStatusCodeEnum statusCode;
    public ScalingPlan withStatusCode(ScalingPlanStatusCodeEnum statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public ScalingPlan withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StatusStartTime")
    public OffsetDateTime statusStartTime;
    public ScalingPlan withStatusStartTime(OffsetDateTime statusStartTime) {
        this.statusStartTime = statusStartTime;
        return this;
    }
}