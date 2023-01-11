package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppPkgInfo
 * 'The data type AppPkgInfo represents the parameters for an application package resource'
**/
public class AppPkgInfo {
    @JsonProperty("_links")
    public AppPkgInfoLinks links;
    public AppPkgInfo withLinks(AppPkgInfoLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalArtifacts")
    public Object additionalArtifacts;
    public AppPkgInfo withAdditionalArtifacts(Object additionalArtifacts) {
        this.additionalArtifacts = additionalArtifacts;
        return this;
    }
    @JsonProperty("appDId")
    public String appDId;
    public AppPkgInfo withAppDId(String appDId) {
        this.appDId = appDId;
        return this;
    }
    @JsonProperty("appDVersion")
    public String appDVersion;
    public AppPkgInfo withAppDVersion(String appDVersion) {
        this.appDVersion = appDVersion;
        return this;
    }
    @JsonProperty("appName")
    public String appName;
    public AppPkgInfo withAppName(String appName) {
        this.appName = appName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appProvider")
    public String appProvider;
    public AppPkgInfo withAppProvider(String appProvider) {
        this.appProvider = appProvider;
        return this;
    }
    @JsonProperty("appSoftwareVersion")
    public String appSoftwareVersion;
    public AppPkgInfo withAppSoftwareVersion(String appSoftwareVersion) {
        this.appSoftwareVersion = appSoftwareVersion;
        return this;
    }
    @JsonProperty("checksum")
    public Checksum checksum;
    public AppPkgInfo withChecksum(Checksum checksum) {
        this.checksum = checksum;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AppPkgInfo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("onboardingState")
    public OnboardingStateEnum onboardingState;
    public AppPkgInfo withOnboardingState(OnboardingStateEnum onboardingState) {
        this.onboardingState = onboardingState;
        return this;
    }
    @JsonProperty("operationalState")
    public AppPkgOperationalStateEnum operationalState;
    public AppPkgInfo withOperationalState(AppPkgOperationalStateEnum operationalState) {
        this.operationalState = operationalState;
        return this;
    }
    @JsonProperty("softwareImages")
    public Object softwareImages;
    public AppPkgInfo withSoftwareImages(Object softwareImages) {
        this.softwareImages = softwareImages;
        return this;
    }
    @JsonProperty("usageState")
    public UsageStateEnum usageState;
    public AppPkgInfo withUsageState(UsageStateEnum usageState) {
        this.usageState = usageState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDefinedData")
    public java.util.Map<String, Object> userDefinedData;
    public AppPkgInfo withUserDefinedData(java.util.Map<String, Object> userDefinedData) {
        this.userDefinedData = userDefinedData;
        return this;
    }
}