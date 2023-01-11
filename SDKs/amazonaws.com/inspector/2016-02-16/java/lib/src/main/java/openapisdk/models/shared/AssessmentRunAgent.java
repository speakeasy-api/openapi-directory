package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssessmentRunAgent
 * Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action.
**/
public class AssessmentRunAgent {
    @JsonProperty("agentHealth")
    public AgentHealthEnum agentHealth;
    public AssessmentRunAgent withAgentHealth(AgentHealthEnum agentHealth) {
        this.agentHealth = agentHealth;
        return this;
    }
    @JsonProperty("agentHealthCode")
    public AgentHealthCodeEnum agentHealthCode;
    public AssessmentRunAgent withAgentHealthCode(AgentHealthCodeEnum agentHealthCode) {
        this.agentHealthCode = agentHealthCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentHealthDetails")
    public String agentHealthDetails;
    public AssessmentRunAgent withAgentHealthDetails(String agentHealthDetails) {
        this.agentHealthDetails = agentHealthDetails;
        return this;
    }
    @JsonProperty("agentId")
    public String agentId;
    public AssessmentRunAgent withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @JsonProperty("assessmentRunArn")
    public String assessmentRunArn;
    public AssessmentRunAgent withAssessmentRunArn(String assessmentRunArn) {
        this.assessmentRunArn = assessmentRunArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoScalingGroup")
    public String autoScalingGroup;
    public AssessmentRunAgent withAutoScalingGroup(String autoScalingGroup) {
        this.autoScalingGroup = autoScalingGroup;
        return this;
    }
    @JsonProperty("telemetryMetadata")
    public TelemetryMetadata[] telemetryMetadata;
    public AssessmentRunAgent withTelemetryMetadata(TelemetryMetadata[] telemetryMetadata) {
        this.telemetryMetadata = telemetryMetadata;
        return this;
    }
}