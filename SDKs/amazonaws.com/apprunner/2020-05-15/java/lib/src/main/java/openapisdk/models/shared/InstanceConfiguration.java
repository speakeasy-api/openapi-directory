package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceConfiguration
 * Describes the runtime configuration of an AWS App Runner service instance (scaling unit).
**/
public class InstanceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Cpu")
    public String cpu;
    public InstanceConfiguration withCpu(String cpu) {
        this.cpu = cpu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceRoleArn")
    public String instanceRoleArn;
    public InstanceConfiguration withInstanceRoleArn(String instanceRoleArn) {
        this.instanceRoleArn = instanceRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Memory")
    public String memory;
    public InstanceConfiguration withMemory(String memory) {
        this.memory = memory;
        return this;
    }
}