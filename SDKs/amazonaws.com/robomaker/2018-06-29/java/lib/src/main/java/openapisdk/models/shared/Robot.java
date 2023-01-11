package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Robot
 * Information about a robot.
**/
public class Robot {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("architecture")
    public ArchitectureEnum architecture;
    public Robot withArchitecture(ArchitectureEnum architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Robot withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Robot withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleetArn")
    public String fleetArn;
    public Robot withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("greenGrassGroupId")
    public String greenGrassGroupId;
    public Robot withGreenGrassGroupId(String greenGrassGroupId) {
        this.greenGrassGroupId = greenGrassGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastDeploymentJob")
    public String lastDeploymentJob;
    public Robot withLastDeploymentJob(String lastDeploymentJob) {
        this.lastDeploymentJob = lastDeploymentJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastDeploymentTime")
    public OffsetDateTime lastDeploymentTime;
    public Robot withLastDeploymentTime(OffsetDateTime lastDeploymentTime) {
        this.lastDeploymentTime = lastDeploymentTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Robot withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RobotStatusEnum status;
    public Robot withStatus(RobotStatusEnum status) {
        this.status = status;
        return this;
    }
}