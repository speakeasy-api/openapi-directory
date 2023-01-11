package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeFleetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public DescribeFleetResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public DescribeFleetResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastDeploymentJob")
    public String lastDeploymentJob;
    public DescribeFleetResponse withLastDeploymentJob(String lastDeploymentJob) {
        this.lastDeploymentJob = lastDeploymentJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastDeploymentStatus")
    public DeploymentStatusEnum lastDeploymentStatus;
    public DescribeFleetResponse withLastDeploymentStatus(DeploymentStatusEnum lastDeploymentStatus) {
        this.lastDeploymentStatus = lastDeploymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastDeploymentTime")
    public OffsetDateTime lastDeploymentTime;
    public DescribeFleetResponse withLastDeploymentTime(OffsetDateTime lastDeploymentTime) {
        this.lastDeploymentTime = lastDeploymentTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DescribeFleetResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robots")
    public Robot[] robots;
    public DescribeFleetResponse withRobots(Robot[] robots) {
        this.robots = robots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public DescribeFleetResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}