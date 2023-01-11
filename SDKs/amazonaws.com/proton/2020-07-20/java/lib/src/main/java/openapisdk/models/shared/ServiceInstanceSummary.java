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
 * ServiceInstanceSummary
 * A summary of the service instance detail data.
**/
public class ServiceInstanceSummary {
    @JsonProperty("arn")
    public String arn;
    public ServiceInstanceSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ServiceInstanceSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("deploymentStatus")
    public DeploymentStatusEnum deploymentStatus;
    public ServiceInstanceSummary withDeploymentStatus(DeploymentStatusEnum deploymentStatus) {
        this.deploymentStatus = deploymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentStatusMessage")
    public String deploymentStatusMessage;
    public ServiceInstanceSummary withDeploymentStatusMessage(String deploymentStatusMessage) {
        this.deploymentStatusMessage = deploymentStatusMessage;
        return this;
    }
    @JsonProperty("environmentName")
    public String environmentName;
    public ServiceInstanceSummary withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastDeploymentAttemptedAt")
    public OffsetDateTime lastDeploymentAttemptedAt;
    public ServiceInstanceSummary withLastDeploymentAttemptedAt(OffsetDateTime lastDeploymentAttemptedAt) {
        this.lastDeploymentAttemptedAt = lastDeploymentAttemptedAt;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastDeploymentSucceededAt")
    public OffsetDateTime lastDeploymentSucceededAt;
    public ServiceInstanceSummary withLastDeploymentSucceededAt(OffsetDateTime lastDeploymentSucceededAt) {
        this.lastDeploymentSucceededAt = lastDeploymentSucceededAt;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ServiceInstanceSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("serviceName")
    public String serviceName;
    public ServiceInstanceSummary withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonProperty("templateMajorVersion")
    public String templateMajorVersion;
    public ServiceInstanceSummary withTemplateMajorVersion(String templateMajorVersion) {
        this.templateMajorVersion = templateMajorVersion;
        return this;
    }
    @JsonProperty("templateMinorVersion")
    public String templateMinorVersion;
    public ServiceInstanceSummary withTemplateMinorVersion(String templateMinorVersion) {
        this.templateMinorVersion = templateMinorVersion;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public ServiceInstanceSummary withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}