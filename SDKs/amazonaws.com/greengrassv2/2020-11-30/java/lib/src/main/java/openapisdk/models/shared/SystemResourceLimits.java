package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SystemResourceLimits
 * Contains information about system resource limits that the IoT Greengrass Core software applies to a component's processes. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits">Configure system resource limits for components</a>.
**/
public class SystemResourceLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpus")
    public Double cpus;
    public SystemResourceLimits withCpus(Double cpus) {
        this.cpus = cpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory")
    public Long memory;
    public SystemResourceLimits withMemory(Long memory) {
        this.memory = memory;
        return this;
    }
}