package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * EnvironmentDescription
 * Describes the properties of an environment.
**/
public class EnvironmentDescription {
    public Boolean abortableOperationInProgress;
    public EnvironmentDescription withAbortableOperationInProgress(Boolean abortableOperationInProgress) {
        this.abortableOperationInProgress = abortableOperationInProgress;
        return this;
    }
    public String applicationName;
    public EnvironmentDescription withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    public String cname;
    public EnvironmentDescription withCname(String cname) {
        this.cname = cname;
        return this;
    }
    public OffsetDateTime dateCreated;
    public EnvironmentDescription withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    public OffsetDateTime dateUpdated;
    public EnvironmentDescription withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    public String description;
    public EnvironmentDescription withDescription(String description) {
        this.description = description;
        return this;
    }
    public String endpointURL;
    public EnvironmentDescription withEndpointUrl(String endpointURL) {
        this.endpointURL = endpointURL;
        return this;
    }
    public String environmentArn;
    public EnvironmentDescription withEnvironmentArn(String environmentArn) {
        this.environmentArn = environmentArn;
        return this;
    }
    public String environmentId;
    public EnvironmentDescription withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    public EnvironmentLink[] environmentLinks;
    public EnvironmentDescription withEnvironmentLinks(EnvironmentLink[] environmentLinks) {
        this.environmentLinks = environmentLinks;
        return this;
    }
    public String environmentName;
    public EnvironmentDescription withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    public EnvironmentHealthEnum health;
    public EnvironmentDescription withHealth(EnvironmentHealthEnum health) {
        this.health = health;
        return this;
    }
    public EnvironmentHealthStatusEnum healthStatus;
    public EnvironmentDescription withHealthStatus(EnvironmentHealthStatusEnum healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    public String operationsRole;
    public EnvironmentDescription withOperationsRole(String operationsRole) {
        this.operationsRole = operationsRole;
        return this;
    }
    public String platformArn;
    public EnvironmentDescription withPlatformArn(String platformArn) {
        this.platformArn = platformArn;
        return this;
    }
    public EnvironmentResourcesDescription resources;
    public EnvironmentDescription withResources(EnvironmentResourcesDescription resources) {
        this.resources = resources;
        return this;
    }
    public String solutionStackName;
    public EnvironmentDescription withSolutionStackName(String solutionStackName) {
        this.solutionStackName = solutionStackName;
        return this;
    }
    public EnvironmentStatusEnum status;
    public EnvironmentDescription withStatus(EnvironmentStatusEnum status) {
        this.status = status;
        return this;
    }
    public String templateName;
    public EnvironmentDescription withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    public EnvironmentTier tier;
    public EnvironmentDescription withTier(EnvironmentTier tier) {
        this.tier = tier;
        return this;
    }
    public String versionLabel;
    public EnvironmentDescription withVersionLabel(String versionLabel) {
        this.versionLabel = versionLabel;
        return this;
    }
}