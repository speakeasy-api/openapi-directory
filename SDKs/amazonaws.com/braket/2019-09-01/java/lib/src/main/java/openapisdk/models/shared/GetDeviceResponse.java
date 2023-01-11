package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDeviceResponse {
    @JsonProperty("deviceArn")
    public String deviceArn;
    public GetDeviceResponse withDeviceArn(String deviceArn) {
        this.deviceArn = deviceArn;
        return this;
    }
    @JsonProperty("deviceCapabilities")
    public String deviceCapabilities;
    public GetDeviceResponse withDeviceCapabilities(String deviceCapabilities) {
        this.deviceCapabilities = deviceCapabilities;
        return this;
    }
    @JsonProperty("deviceName")
    public String deviceName;
    public GetDeviceResponse withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonProperty("deviceStatus")
    public DeviceStatusEnum deviceStatus;
    public GetDeviceResponse withDeviceStatus(DeviceStatusEnum deviceStatus) {
        this.deviceStatus = deviceStatus;
        return this;
    }
    @JsonProperty("deviceType")
    public DeviceTypeEnum deviceType;
    public GetDeviceResponse withDeviceType(DeviceTypeEnum deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonProperty("providerName")
    public String providerName;
    public GetDeviceResponse withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
}