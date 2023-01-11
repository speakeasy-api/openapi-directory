package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmitJobRequestBodyContainerOverrides
 * The overrides that should be sent to a container.
**/
public class SubmitJobRequestBodyContainerOverrides {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("command")
    public String[] command;
    public SubmitJobRequestBodyContainerOverrides withCommand(String[] command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public openapisdk.models.shared.KeyValuePair[] environment;
    public SubmitJobRequestBodyContainerOverrides withEnvironment(openapisdk.models.shared.KeyValuePair[] environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceType")
    public String instanceType;
    public SubmitJobRequestBodyContainerOverrides withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory")
    public java.util.Map<String, Object> memory;
    public SubmitJobRequestBodyContainerOverrides withMemory(java.util.Map<String, Object> memory) {
        this.memory = memory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRequirements")
    public openapisdk.models.shared.ResourceRequirement[] resourceRequirements;
    public SubmitJobRequestBodyContainerOverrides withResourceRequirements(openapisdk.models.shared.ResourceRequirement[] resourceRequirements) {
        this.resourceRequirements = resourceRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcpus")
    public java.util.Map<String, Object> vcpus;
    public SubmitJobRequestBodyContainerOverrides withVcpus(java.util.Map<String, Object> vcpus) {
        this.vcpus = vcpus;
        return this;
    }
}