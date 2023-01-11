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
 * Deployment
 * Contains information about a deployment.
**/
public class Deployment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTimestamp")
    public OffsetDateTime creationTimestamp;
    public Deployment withCreationTimestamp(OffsetDateTime creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;
    public Deployment withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentName")
    public String deploymentName;
    public Deployment withDeploymentName(String deploymentName) {
        this.deploymentName = deploymentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentStatus")
    public DeploymentStatusEnum deploymentStatus;
    public Deployment withDeploymentStatus(DeploymentStatusEnum deploymentStatus) {
        this.deploymentStatus = deploymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isLatestForTarget")
    public Boolean isLatestForTarget;
    public Deployment withIsLatestForTarget(Boolean isLatestForTarget) {
        this.isLatestForTarget = isLatestForTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public Deployment withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetArn")
    public String targetArn;
    public Deployment withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
}