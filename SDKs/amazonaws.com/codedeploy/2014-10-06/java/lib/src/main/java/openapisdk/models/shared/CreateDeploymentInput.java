package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDeploymentInput
 * Represents the input of a <code>CreateDeployment</code> operation.
**/
public class CreateDeploymentInput {
    @JsonProperty("applicationName")
    public String applicationName;
    public CreateDeploymentInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRollbackConfiguration")
    public AutoRollbackConfiguration autoRollbackConfiguration;
    public CreateDeploymentInput withAutoRollbackConfiguration(AutoRollbackConfiguration autoRollbackConfiguration) {
        this.autoRollbackConfiguration = autoRollbackConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentConfigName")
    public String deploymentConfigName;
    public CreateDeploymentInput withDeploymentConfigName(String deploymentConfigName) {
        this.deploymentConfigName = deploymentConfigName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentGroupName")
    public String deploymentGroupName;
    public CreateDeploymentInput withDeploymentGroupName(String deploymentGroupName) {
        this.deploymentGroupName = deploymentGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateDeploymentInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileExistsBehavior")
    public FileExistsBehaviorEnum fileExistsBehavior;
    public CreateDeploymentInput withFileExistsBehavior(FileExistsBehaviorEnum fileExistsBehavior) {
        this.fileExistsBehavior = fileExistsBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreApplicationStopFailures")
    public Boolean ignoreApplicationStopFailures;
    public CreateDeploymentInput withIgnoreApplicationStopFailures(Boolean ignoreApplicationStopFailures) {
        this.ignoreApplicationStopFailures = ignoreApplicationStopFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public RevisionLocation revision;
    public CreateDeploymentInput withRevision(RevisionLocation revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetInstances")
    public TargetInstances targetInstances;
    public CreateDeploymentInput withTargetInstances(TargetInstances targetInstances) {
        this.targetInstances = targetInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateOutdatedInstancesOnly")
    public Boolean updateOutdatedInstancesOnly;
    public CreateDeploymentInput withUpdateOutdatedInstancesOnly(Boolean updateOutdatedInstancesOnly) {
        this.updateOutdatedInstancesOnly = updateOutdatedInstancesOnly;
        return this;
    }
}