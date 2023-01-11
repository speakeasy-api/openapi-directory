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
 * EnvironmentSummary
 * A summary of the environment detail data.
**/
public class EnvironmentSummary {
    @JsonProperty("arn")
    public String arn;
    public EnvironmentSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public EnvironmentSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("deploymentStatus")
    public DeploymentStatusEnum deploymentStatus;
    public EnvironmentSummary withDeploymentStatus(DeploymentStatusEnum deploymentStatus) {
        this.deploymentStatus = deploymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentStatusMessage")
    public String deploymentStatusMessage;
    public EnvironmentSummary withDeploymentStatusMessage(String deploymentStatusMessage) {
        this.deploymentStatusMessage = deploymentStatusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EnvironmentSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentAccountConnectionId")
    public String environmentAccountConnectionId;
    public EnvironmentSummary withEnvironmentAccountConnectionId(String environmentAccountConnectionId) {
        this.environmentAccountConnectionId = environmentAccountConnectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentAccountId")
    public String environmentAccountId;
    public EnvironmentSummary withEnvironmentAccountId(String environmentAccountId) {
        this.environmentAccountId = environmentAccountId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastDeploymentAttemptedAt")
    public OffsetDateTime lastDeploymentAttemptedAt;
    public EnvironmentSummary withLastDeploymentAttemptedAt(OffsetDateTime lastDeploymentAttemptedAt) {
        this.lastDeploymentAttemptedAt = lastDeploymentAttemptedAt;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastDeploymentSucceededAt")
    public OffsetDateTime lastDeploymentSucceededAt;
    public EnvironmentSummary withLastDeploymentSucceededAt(OffsetDateTime lastDeploymentSucceededAt) {
        this.lastDeploymentSucceededAt = lastDeploymentSucceededAt;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public EnvironmentSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protonServiceRoleArn")
    public String protonServiceRoleArn;
    public EnvironmentSummary withProtonServiceRoleArn(String protonServiceRoleArn) {
        this.protonServiceRoleArn = protonServiceRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioning")
    public ProvisioningEnum provisioning;
    public EnvironmentSummary withProvisioning(ProvisioningEnum provisioning) {
        this.provisioning = provisioning;
        return this;
    }
    @JsonProperty("templateMajorVersion")
    public String templateMajorVersion;
    public EnvironmentSummary withTemplateMajorVersion(String templateMajorVersion) {
        this.templateMajorVersion = templateMajorVersion;
        return this;
    }
    @JsonProperty("templateMinorVersion")
    public String templateMinorVersion;
    public EnvironmentSummary withTemplateMinorVersion(String templateMinorVersion) {
        this.templateMinorVersion = templateMinorVersion;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public EnvironmentSummary withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}