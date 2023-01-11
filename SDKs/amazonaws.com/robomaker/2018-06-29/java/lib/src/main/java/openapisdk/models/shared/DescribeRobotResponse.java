package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeRobotResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("architecture")
    public ArchitectureEnum architecture;
    public DescribeRobotResponse withArchitecture(ArchitectureEnum architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public DescribeRobotResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public DescribeRobotResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleetArn")
    public String fleetArn;
    public DescribeRobotResponse withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("greengrassGroupId")
    public String greengrassGroupId;
    public DescribeRobotResponse withGreengrassGroupId(String greengrassGroupId) {
        this.greengrassGroupId = greengrassGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastDeploymentJob")
    public String lastDeploymentJob;
    public DescribeRobotResponse withLastDeploymentJob(String lastDeploymentJob) {
        this.lastDeploymentJob = lastDeploymentJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastDeploymentTime")
    public OffsetDateTime lastDeploymentTime;
    public DescribeRobotResponse withLastDeploymentTime(OffsetDateTime lastDeploymentTime) {
        this.lastDeploymentTime = lastDeploymentTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DescribeRobotResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RobotStatusEnum status;
    public DescribeRobotResponse withStatus(RobotStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public DescribeRobotResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}