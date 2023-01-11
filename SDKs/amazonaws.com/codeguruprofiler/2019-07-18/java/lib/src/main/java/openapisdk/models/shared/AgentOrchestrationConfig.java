package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AgentOrchestrationConfig
 *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. 
**/
public class AgentOrchestrationConfig {
    @JsonProperty("profilingEnabled")
    public Boolean profilingEnabled;
    public AgentOrchestrationConfig withProfilingEnabled(Boolean profilingEnabled) {
        this.profilingEnabled = profilingEnabled;
        return this;
    }
}