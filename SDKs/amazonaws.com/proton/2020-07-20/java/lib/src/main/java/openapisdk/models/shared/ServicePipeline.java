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
 * ServicePipeline
 * The service pipeline detail data.
**/
public class ServicePipeline {
    @JsonProperty("arn")
    public String arn;
    public ServicePipeline withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ServicePipeline withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("deploymentStatus")
    public DeploymentStatusEnum deploymentStatus;
    public ServicePipeline withDeploymentStatus(DeploymentStatusEnum deploymentStatus) {
        this.deploymentStatus = deploymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentStatusMessage")
    public String deploymentStatusMessage;
    public ServicePipeline withDeploymentStatusMessage(String deploymentStatusMessage) {
        this.deploymentStatusMessage = deploymentStatusMessage;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastDeploymentAttemptedAt")
    public OffsetDateTime lastDeploymentAttemptedAt;
    public ServicePipeline withLastDeploymentAttemptedAt(OffsetDateTime lastDeploymentAttemptedAt) {
        this.lastDeploymentAttemptedAt = lastDeploymentAttemptedAt;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastDeploymentSucceededAt")
    public OffsetDateTime lastDeploymentSucceededAt;
    public ServicePipeline withLastDeploymentSucceededAt(OffsetDateTime lastDeploymentSucceededAt) {
        this.lastDeploymentSucceededAt = lastDeploymentSucceededAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public String spec;
    public ServicePipeline withSpec(String spec) {
        this.spec = spec;
        return this;
    }
    @JsonProperty("templateMajorVersion")
    public String templateMajorVersion;
    public ServicePipeline withTemplateMajorVersion(String templateMajorVersion) {
        this.templateMajorVersion = templateMajorVersion;
        return this;
    }
    @JsonProperty("templateMinorVersion")
    public String templateMinorVersion;
    public ServicePipeline withTemplateMinorVersion(String templateMinorVersion) {
        this.templateMinorVersion = templateMinorVersion;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public ServicePipeline withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}