package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParallelismConfigurationUpdate
 * Describes updates to parameters for how an application executes multiple tasks simultaneously.
**/
public class ParallelismConfigurationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingEnabledUpdate")
    public Boolean autoScalingEnabledUpdate;
    public ParallelismConfigurationUpdate withAutoScalingEnabledUpdate(Boolean autoScalingEnabledUpdate) {
        this.autoScalingEnabledUpdate = autoScalingEnabledUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationTypeUpdate")
    public ConfigurationTypeEnum configurationTypeUpdate;
    public ParallelismConfigurationUpdate withConfigurationTypeUpdate(ConfigurationTypeEnum configurationTypeUpdate) {
        this.configurationTypeUpdate = configurationTypeUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelismPerKPUUpdate")
    public Long parallelismPerKPUUpdate;
    public ParallelismConfigurationUpdate withParallelismPerKpuUpdate(Long parallelismPerKPUUpdate) {
        this.parallelismPerKPUUpdate = parallelismPerKPUUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelismUpdate")
    public Long parallelismUpdate;
    public ParallelismConfigurationUpdate withParallelismUpdate(Long parallelismUpdate) {
        this.parallelismUpdate = parallelismUpdate;
        return this;
    }
}