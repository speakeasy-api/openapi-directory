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
 * Fleet
 * Information about a fleet.
**/
public class Fleet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Fleet withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Fleet withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastDeploymentJob")
    public String lastDeploymentJob;
    public Fleet withLastDeploymentJob(String lastDeploymentJob) {
        this.lastDeploymentJob = lastDeploymentJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastDeploymentStatus")
    public DeploymentStatusEnum lastDeploymentStatus;
    public Fleet withLastDeploymentStatus(DeploymentStatusEnum lastDeploymentStatus) {
        this.lastDeploymentStatus = lastDeploymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastDeploymentTime")
    public OffsetDateTime lastDeploymentTime;
    public Fleet withLastDeploymentTime(OffsetDateTime lastDeploymentTime) {
        this.lastDeploymentTime = lastDeploymentTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Fleet withName(String name) {
        this.name = name;
        return this;
    }
}