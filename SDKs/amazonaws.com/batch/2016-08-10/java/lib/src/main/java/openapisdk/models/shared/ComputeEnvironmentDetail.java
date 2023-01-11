package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeEnvironmentDetail
 * An object representing an Batch compute environment.
**/
public class ComputeEnvironmentDetail {
    @JsonProperty("computeEnvironmentArn")
    public String computeEnvironmentArn;
    public ComputeEnvironmentDetail withComputeEnvironmentArn(String computeEnvironmentArn) {
        this.computeEnvironmentArn = computeEnvironmentArn;
        return this;
    }
    @JsonProperty("computeEnvironmentName")
    public String computeEnvironmentName;
    public ComputeEnvironmentDetail withComputeEnvironmentName(String computeEnvironmentName) {
        this.computeEnvironmentName = computeEnvironmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeResources")
    public ComputeResource computeResources;
    public ComputeEnvironmentDetail withComputeResources(ComputeResource computeResources) {
        this.computeResources = computeResources;
        return this;
    }
    @JsonProperty("ecsClusterArn")
    public String ecsClusterArn;
    public ComputeEnvironmentDetail withEcsClusterArn(String ecsClusterArn) {
        this.ecsClusterArn = ecsClusterArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRole")
    public String serviceRole;
    public ComputeEnvironmentDetail withServiceRole(String serviceRole) {
        this.serviceRole = serviceRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CeStateEnum state;
    public ComputeEnvironmentDetail withState(CeStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CeStatusEnum status;
    public ComputeEnvironmentDetail withStatus(CeStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusReason")
    public String statusReason;
    public ComputeEnvironmentDetail withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ComputeEnvironmentDetail withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CeTypeEnum type;
    public ComputeEnvironmentDetail withType(CeTypeEnum type) {
        this.type = type;
        return this;
    }
}