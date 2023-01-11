package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateProfilingGroupRequestBodyAgentOrchestrationConfig
 *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. 
**/
public class UpdateProfilingGroupRequestBodyAgentOrchestrationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profilingEnabled")
    public Boolean profilingEnabled;
    public UpdateProfilingGroupRequestBodyAgentOrchestrationConfig withProfilingEnabled(Boolean profilingEnabled) {
        this.profilingEnabled = profilingEnabled;
        return this;
    }
}