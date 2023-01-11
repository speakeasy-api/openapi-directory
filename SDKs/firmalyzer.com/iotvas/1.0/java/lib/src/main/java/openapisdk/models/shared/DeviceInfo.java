package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeviceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cve_list")
    public Vulnerability[] cveList;
    public DeviceInfo withCveList(Vulnerability[] cveList) {
        this.cveList = cveList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_type")
    public String deviceType;
    public DeviceInfo withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firmware_info")
    public DeviceInfoFirmwareInfo firmwareInfo;
    public DeviceInfo withFirmwareInfo(DeviceInfoFirmwareInfo firmwareInfo) {
        this.firmwareInfo = firmwareInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firmware_version")
    public String firmwareVersion;
    public DeviceInfo withFirmwareVersion(String firmwareVersion) {
        this.firmwareVersion = firmwareVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_discontinued")
    public Boolean isDiscontinued;
    public DeviceInfo withIsDiscontinued(Boolean isDiscontinued) {
        this.isDiscontinued = isDiscontinued;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest_firmware_info")
    public DeviceInfoFirmwareInfo latestFirmwareInfo;
    public DeviceInfo withLatestFirmwareInfo(DeviceInfoFirmwareInfo latestFirmwareInfo) {
        this.latestFirmwareInfo = latestFirmwareInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public DeviceInfo withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model_name")
    public String modelName;
    public DeviceInfo withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
}