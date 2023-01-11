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
 * Environment
 * The environment detail data. An AWS Proton environment is a set resources shared across an AWS Proton service.
**/
public class Environment {
    @JsonProperty("arn")
    public String arn;
    public Environment withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Environment withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("deploymentStatus")
    public DeploymentStatusEnum deploymentStatus;
    public Environment withDeploymentStatus(DeploymentStatusEnum deploymentStatus) {
        this.deploymentStatus = deploymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentStatusMessage")
    public String deploymentStatusMessage;
    public Environment withDeploymentStatusMessage(String deploymentStatusMessage) {
        this.deploymentStatusMessage = deploymentStatusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Environment withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentAccountConnectionId")
    public String environmentAccountConnectionId;
    public Environment withEnvironmentAccountConnectionId(String environmentAccountConnectionId) {
        this.environmentAccountConnectionId = environmentAccountConnectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentAccountId")
    public String environmentAccountId;
    public Environment withEnvironmentAccountId(String environmentAccountId) {
        this.environmentAccountId = environmentAccountId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastDeploymentAttemptedAt")
    public OffsetDateTime lastDeploymentAttemptedAt;
    public Environment withLastDeploymentAttemptedAt(OffsetDateTime lastDeploymentAttemptedAt) {
        this.lastDeploymentAttemptedAt = lastDeploymentAttemptedAt;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastDeploymentSucceededAt")
    public OffsetDateTime lastDeploymentSucceededAt;
    public Environment withLastDeploymentSucceededAt(OffsetDateTime lastDeploymentSucceededAt) {
        this.lastDeploymentSucceededAt = lastDeploymentSucceededAt;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Environment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protonServiceRoleArn")
    public String protonServiceRoleArn;
    public Environment withProtonServiceRoleArn(String protonServiceRoleArn) {
        this.protonServiceRoleArn = protonServiceRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioning")
    public ProvisioningEnum provisioning;
    public Environment withProvisioning(ProvisioningEnum provisioning) {
        this.provisioning = provisioning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public String spec;
    public Environment withSpec(String spec) {
        this.spec = spec;
        return this;
    }
    @JsonProperty("templateMajorVersion")
    public String templateMajorVersion;
    public Environment withTemplateMajorVersion(String templateMajorVersion) {
        this.templateMajorVersion = templateMajorVersion;
        return this;
    }
    @JsonProperty("templateMinorVersion")
    public String templateMinorVersion;
    public Environment withTemplateMinorVersion(String templateMinorVersion) {
        this.templateMinorVersion = templateMinorVersion;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public Environment withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}