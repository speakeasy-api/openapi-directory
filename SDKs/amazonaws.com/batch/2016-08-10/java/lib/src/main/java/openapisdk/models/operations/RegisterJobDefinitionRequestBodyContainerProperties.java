package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterJobDefinitionRequestBodyContainerProperties
 * Container properties are used in job definitions to describe the container that's launched as part of a job.
**/
public class RegisterJobDefinitionRequestBodyContainerProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("command")
    public String[] command;
    public RegisterJobDefinitionRequestBodyContainerProperties withCommand(String[] command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public openapisdk.models.shared.KeyValuePair[] environment;
    public RegisterJobDefinitionRequestBodyContainerProperties withEnvironment(openapisdk.models.shared.KeyValuePair[] environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionRoleArn")
    public String executionRoleArn;
    public RegisterJobDefinitionRequestBodyContainerProperties withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fargatePlatformConfiguration")
    public openapisdk.models.shared.FargatePlatformConfiguration fargatePlatformConfiguration;
    public RegisterJobDefinitionRequestBodyContainerProperties withFargatePlatformConfiguration(openapisdk.models.shared.FargatePlatformConfiguration fargatePlatformConfiguration) {
        this.fargatePlatformConfiguration = fargatePlatformConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public RegisterJobDefinitionRequestBodyContainerProperties withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceType")
    public String instanceType;
    public RegisterJobDefinitionRequestBodyContainerProperties withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobRoleArn")
    public String jobRoleArn;
    public RegisterJobDefinitionRequestBodyContainerProperties withJobRoleArn(String jobRoleArn) {
        this.jobRoleArn = jobRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linuxParameters")
    public openapisdk.models.shared.LinuxParameters linuxParameters;
    public RegisterJobDefinitionRequestBodyContainerProperties withLinuxParameters(openapisdk.models.shared.LinuxParameters linuxParameters) {
        this.linuxParameters = linuxParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logConfiguration")
    public openapisdk.models.shared.LogConfiguration logConfiguration;
    public RegisterJobDefinitionRequestBodyContainerProperties withLogConfiguration(openapisdk.models.shared.LogConfiguration logConfiguration) {
        this.logConfiguration = logConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory")
    public java.util.Map<String, Object> memory;
    public RegisterJobDefinitionRequestBodyContainerProperties withMemory(java.util.Map<String, Object> memory) {
        this.memory = memory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountPoints")
    public openapisdk.models.shared.MountPoint[] mountPoints;
    public RegisterJobDefinitionRequestBodyContainerProperties withMountPoints(openapisdk.models.shared.MountPoint[] mountPoints) {
        this.mountPoints = mountPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfiguration")
    public openapisdk.models.shared.NetworkConfiguration networkConfiguration;
    public RegisterJobDefinitionRequestBodyContainerProperties withNetworkConfiguration(openapisdk.models.shared.NetworkConfiguration networkConfiguration) {
        this.networkConfiguration = networkConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privileged")
    public Boolean privileged;
    public RegisterJobDefinitionRequestBodyContainerProperties withPrivileged(Boolean privileged) {
        this.privileged = privileged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readonlyRootFilesystem")
    public Boolean readonlyRootFilesystem;
    public RegisterJobDefinitionRequestBodyContainerProperties withReadonlyRootFilesystem(Boolean readonlyRootFilesystem) {
        this.readonlyRootFilesystem = readonlyRootFilesystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRequirements")
    public openapisdk.models.shared.ResourceRequirement[] resourceRequirements;
    public RegisterJobDefinitionRequestBodyContainerProperties withResourceRequirements(openapisdk.models.shared.ResourceRequirement[] resourceRequirements) {
        this.resourceRequirements = resourceRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secrets")
    public openapisdk.models.shared.Secret[] secrets;
    public RegisterJobDefinitionRequestBodyContainerProperties withSecrets(openapisdk.models.shared.Secret[] secrets) {
        this.secrets = secrets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ulimits")
    public openapisdk.models.shared.Ulimit[] ulimits;
    public RegisterJobDefinitionRequestBodyContainerProperties withUlimits(openapisdk.models.shared.Ulimit[] ulimits) {
        this.ulimits = ulimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public RegisterJobDefinitionRequestBodyContainerProperties withUser(String user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcpus")
    public java.util.Map<String, Object> vcpus;
    public RegisterJobDefinitionRequestBodyContainerProperties withVcpus(java.util.Map<String, Object> vcpus) {
        this.vcpus = vcpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public openapisdk.models.shared.Volume[] volumes;
    public RegisterJobDefinitionRequestBodyContainerProperties withVolumes(openapisdk.models.shared.Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
}