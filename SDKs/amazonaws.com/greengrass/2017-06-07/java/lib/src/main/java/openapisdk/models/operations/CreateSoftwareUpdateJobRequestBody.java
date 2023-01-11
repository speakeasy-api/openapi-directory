package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSoftwareUpdateJobRequestBody {
    @JsonProperty("S3UrlSignerRole")
    public String s3UrlSignerRole;
    public CreateSoftwareUpdateJobRequestBody withS3UrlSignerRole(String s3UrlSignerRole) {
        this.s3UrlSignerRole = s3UrlSignerRole;
        return this;
    }
    @JsonProperty("SoftwareToUpdate")
    public CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum softwareToUpdate;
    public CreateSoftwareUpdateJobRequestBody withSoftwareToUpdate(CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum softwareToUpdate) {
        this.softwareToUpdate = softwareToUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateAgentLogLevel")
    public CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum updateAgentLogLevel;
    public CreateSoftwareUpdateJobRequestBody withUpdateAgentLogLevel(CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum updateAgentLogLevel) {
        this.updateAgentLogLevel = updateAgentLogLevel;
        return this;
    }
    @JsonProperty("UpdateTargets")
    public String[] updateTargets;
    public CreateSoftwareUpdateJobRequestBody withUpdateTargets(String[] updateTargets) {
        this.updateTargets = updateTargets;
        return this;
    }
    @JsonProperty("UpdateTargetsArchitecture")
    public CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum updateTargetsArchitecture;
    public CreateSoftwareUpdateJobRequestBody withUpdateTargetsArchitecture(CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum updateTargetsArchitecture) {
        this.updateTargetsArchitecture = updateTargetsArchitecture;
        return this;
    }
    @JsonProperty("UpdateTargetsOperatingSystem")
    public CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum updateTargetsOperatingSystem;
    public CreateSoftwareUpdateJobRequestBody withUpdateTargetsOperatingSystem(CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum updateTargetsOperatingSystem) {
        this.updateTargetsOperatingSystem = updateTargetsOperatingSystem;
        return this;
    }
}