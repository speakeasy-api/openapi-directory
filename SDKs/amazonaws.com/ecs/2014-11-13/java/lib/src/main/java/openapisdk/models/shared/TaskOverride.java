package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskOverride
 * The overrides associated with a task.
**/
public class TaskOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerOverrides")
    public ContainerOverride[] containerOverrides;
    public TaskOverride withContainerOverrides(ContainerOverride[] containerOverrides) {
        this.containerOverrides = containerOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu")
    public String cpu;
    public TaskOverride withCpu(String cpu) {
        this.cpu = cpu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ephemeralStorage")
    public EphemeralStorage ephemeralStorage;
    public TaskOverride withEphemeralStorage(EphemeralStorage ephemeralStorage) {
        this.ephemeralStorage = ephemeralStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionRoleArn")
    public String executionRoleArn;
    public TaskOverride withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inferenceAcceleratorOverrides")
    public InferenceAcceleratorOverride[] inferenceAcceleratorOverrides;
    public TaskOverride withInferenceAcceleratorOverrides(InferenceAcceleratorOverride[] inferenceAcceleratorOverrides) {
        this.inferenceAcceleratorOverrides = inferenceAcceleratorOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory")
    public String memory;
    public TaskOverride withMemory(String memory) {
        this.memory = memory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskRoleArn")
    public String taskRoleArn;
    public TaskOverride withTaskRoleArn(String taskRoleArn) {
        this.taskRoleArn = taskRoleArn;
        return this;
    }
}