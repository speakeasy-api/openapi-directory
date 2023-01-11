package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentConfiguration
 *  The response of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> that specifies if an agent profiles or not and for how long to return profiling data. 
**/
public class AgentConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentParameters")
    public java.util.Map<String, String> agentParameters;
    public AgentConfiguration withAgentParameters(java.util.Map<String, String> agentParameters) {
        this.agentParameters = agentParameters;
        return this;
    }
    @JsonProperty("periodInSeconds")
    public Long periodInSeconds;
    public AgentConfiguration withPeriodInSeconds(Long periodInSeconds) {
        this.periodInSeconds = periodInSeconds;
        return this;
    }
    @JsonProperty("shouldProfile")
    public Boolean shouldProfile;
    public AgentConfiguration withShouldProfile(Boolean shouldProfile) {
        this.shouldProfile = shouldProfile;
        return this;
    }
}