package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Container
 * A Docker container that is part of a task.
**/
public class Container {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerArn")
    public String containerArn;
    public Container withContainerArn(String containerArn) {
        this.containerArn = containerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu")
    public String cpu;
    public Container withCpu(String cpu) {
        this.cpu = cpu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitCode")
    public Long exitCode;
    public Container withExitCode(Long exitCode) {
        this.exitCode = exitCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gpuIds")
    public String[] gpuIds;
    public Container withGpuIds(String[] gpuIds) {
        this.gpuIds = gpuIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthStatus")
    public HealthStatusEnum healthStatus;
    public Container withHealthStatus(HealthStatusEnum healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public Container withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageDigest")
    public String imageDigest;
    public Container withImageDigest(String imageDigest) {
        this.imageDigest = imageDigest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastStatus")
    public String lastStatus;
    public Container withLastStatus(String lastStatus) {
        this.lastStatus = lastStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedAgents")
    public ManagedAgent[] managedAgents;
    public Container withManagedAgents(ManagedAgent[] managedAgents) {
        this.managedAgents = managedAgents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory")
    public String memory;
    public Container withMemory(String memory) {
        this.memory = memory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryReservation")
    public String memoryReservation;
    public Container withMemoryReservation(String memoryReservation) {
        this.memoryReservation = memoryReservation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Container withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkBindings")
    public NetworkBinding[] networkBindings;
    public Container withNetworkBindings(NetworkBinding[] networkBindings) {
        this.networkBindings = networkBindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterfaces")
    public NetworkInterface[] networkInterfaces;
    public Container withNetworkInterfaces(NetworkInterface[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public Container withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeId")
    public String runtimeId;
    public Container withRuntimeId(String runtimeId) {
        this.runtimeId = runtimeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskArn")
    public String taskArn;
    public Container withTaskArn(String taskArn) {
        this.taskArn = taskArn;
        return this;
    }
}