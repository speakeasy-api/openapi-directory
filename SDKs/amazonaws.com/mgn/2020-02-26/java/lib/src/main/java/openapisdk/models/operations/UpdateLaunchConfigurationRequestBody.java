package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLaunchConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyPrivateIp")
    public Boolean copyPrivateIp;
    public UpdateLaunchConfigurationRequestBody withCopyPrivateIp(Boolean copyPrivateIp) {
        this.copyPrivateIp = copyPrivateIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyTags")
    public Boolean copyTags;
    public UpdateLaunchConfigurationRequestBody withCopyTags(Boolean copyTags) {
        this.copyTags = copyTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchDisposition")
    public UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum launchDisposition;
    public UpdateLaunchConfigurationRequestBody withLaunchDisposition(UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum launchDisposition) {
        this.launchDisposition = launchDisposition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licensing")
    public UpdateLaunchConfigurationRequestBodyLicensing licensing;
    public UpdateLaunchConfigurationRequestBody withLicensing(UpdateLaunchConfigurationRequestBodyLicensing licensing) {
        this.licensing = licensing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateLaunchConfigurationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public UpdateLaunchConfigurationRequestBody withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetInstanceTypeRightSizingMethod")
    public UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum targetInstanceTypeRightSizingMethod;
    public UpdateLaunchConfigurationRequestBody withTargetInstanceTypeRightSizingMethod(UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum targetInstanceTypeRightSizingMethod) {
        this.targetInstanceTypeRightSizingMethod = targetInstanceTypeRightSizingMethod;
        return this;
    }
}