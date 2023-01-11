package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerOverride
 * The overrides that should be sent to a container. An empty container override can be passed in. An example of an empty container override would be <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.
**/
public class ContainerOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("command")
    public String[] command;
    public ContainerOverride withCommand(String[] command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu")
    public Long cpu;
    public ContainerOverride withCpu(Long cpu) {
        this.cpu = cpu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public KeyValuePair[] environment;
    public ContainerOverride withEnvironment(KeyValuePair[] environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentFiles")
    public EnvironmentFile[] environmentFiles;
    public ContainerOverride withEnvironmentFiles(EnvironmentFile[] environmentFiles) {
        this.environmentFiles = environmentFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory")
    public Long memory;
    public ContainerOverride withMemory(Long memory) {
        this.memory = memory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryReservation")
    public Long memoryReservation;
    public ContainerOverride withMemoryReservation(Long memoryReservation) {
        this.memoryReservation = memoryReservation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ContainerOverride withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRequirements")
    public ResourceRequirement[] resourceRequirements;
    public ContainerOverride withResourceRequirements(ResourceRequirement[] resourceRequirements) {
        this.resourceRequirements = resourceRequirements;
        return this;
    }
}