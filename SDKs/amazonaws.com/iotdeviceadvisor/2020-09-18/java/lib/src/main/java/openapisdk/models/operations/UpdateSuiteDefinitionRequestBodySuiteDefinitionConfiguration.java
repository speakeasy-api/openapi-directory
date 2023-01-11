package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration
 * Gets Suite Definition Configuration.
**/
public class UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicePermissionRoleArn")
    public String devicePermissionRoleArn;
    public UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration withDevicePermissionRoleArn(String devicePermissionRoleArn) {
        this.devicePermissionRoleArn = devicePermissionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public openapisdk.models.shared.DeviceUnderTest[] devices;
    public UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration withDevices(openapisdk.models.shared.DeviceUnderTest[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intendedForQualification")
    public Boolean intendedForQualification;
    public UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration withIntendedForQualification(Boolean intendedForQualification) {
        this.intendedForQualification = intendedForQualification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootGroup")
    public String rootGroup;
    public UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration withRootGroup(String rootGroup) {
        this.rootGroup = rootGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteDefinitionName")
    public String suiteDefinitionName;
    public UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration withSuiteDefinitionName(String suiteDefinitionName) {
        this.suiteDefinitionName = suiteDefinitionName;
        return this;
    }
}