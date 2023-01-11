package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuiteDefinitionConfiguration
 * Gets Suite Definition Configuration.
**/
public class SuiteDefinitionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicePermissionRoleArn")
    public String devicePermissionRoleArn;
    public SuiteDefinitionConfiguration withDevicePermissionRoleArn(String devicePermissionRoleArn) {
        this.devicePermissionRoleArn = devicePermissionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public DeviceUnderTest[] devices;
    public SuiteDefinitionConfiguration withDevices(DeviceUnderTest[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intendedForQualification")
    public Boolean intendedForQualification;
    public SuiteDefinitionConfiguration withIntendedForQualification(Boolean intendedForQualification) {
        this.intendedForQualification = intendedForQualification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootGroup")
    public String rootGroup;
    public SuiteDefinitionConfiguration withRootGroup(String rootGroup) {
        this.rootGroup = rootGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteDefinitionName")
    public String suiteDefinitionName;
    public SuiteDefinitionConfiguration withSuiteDefinitionName(String suiteDefinitionName) {
        this.suiteDefinitionName = suiteDefinitionName;
        return this;
    }
}