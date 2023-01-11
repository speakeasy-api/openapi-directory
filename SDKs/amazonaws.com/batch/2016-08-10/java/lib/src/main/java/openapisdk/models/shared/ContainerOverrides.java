package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerOverrides
 * The overrides that should be sent to a container.
**/
public class ContainerOverrides {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("command")
    public String[] command;
    public ContainerOverrides withCommand(String[] command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public KeyValuePair[] environment;
    public ContainerOverrides withEnvironment(KeyValuePair[] environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceType")
    public String instanceType;
    public ContainerOverrides withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory")
    public java.util.Map<String, Object> memory;
    public ContainerOverrides withMemory(java.util.Map<String, Object> memory) {
        this.memory = memory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRequirements")
    public ResourceRequirement[] resourceRequirements;
    public ContainerOverrides withResourceRequirements(ResourceRequirement[] resourceRequirements) {
        this.resourceRequirements = resourceRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcpus")
    public java.util.Map<String, Object> vcpus;
    public ContainerOverrides withVcpus(java.util.Map<String, Object> vcpus) {
        this.vcpus = vcpus;
        return this;
    }
}