package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkspaceAccessProperties
 * The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>.
**/
public class WorkspaceAccessProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceTypeAndroid")
    public AccessPropertyValueEnum deviceTypeAndroid;
    public WorkspaceAccessProperties withDeviceTypeAndroid(AccessPropertyValueEnum deviceTypeAndroid) {
        this.deviceTypeAndroid = deviceTypeAndroid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceTypeChromeOs")
    public AccessPropertyValueEnum deviceTypeChromeOs;
    public WorkspaceAccessProperties withDeviceTypeChromeOs(AccessPropertyValueEnum deviceTypeChromeOs) {
        this.deviceTypeChromeOs = deviceTypeChromeOs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceTypeIos")
    public AccessPropertyValueEnum deviceTypeIos;
    public WorkspaceAccessProperties withDeviceTypeIos(AccessPropertyValueEnum deviceTypeIos) {
        this.deviceTypeIos = deviceTypeIos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceTypeLinux")
    public AccessPropertyValueEnum deviceTypeLinux;
    public WorkspaceAccessProperties withDeviceTypeLinux(AccessPropertyValueEnum deviceTypeLinux) {
        this.deviceTypeLinux = deviceTypeLinux;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceTypeOsx")
    public AccessPropertyValueEnum deviceTypeOsx;
    public WorkspaceAccessProperties withDeviceTypeOsx(AccessPropertyValueEnum deviceTypeOsx) {
        this.deviceTypeOsx = deviceTypeOsx;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceTypeWeb")
    public AccessPropertyValueEnum deviceTypeWeb;
    public WorkspaceAccessProperties withDeviceTypeWeb(AccessPropertyValueEnum deviceTypeWeb) {
        this.deviceTypeWeb = deviceTypeWeb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceTypeWindows")
    public AccessPropertyValueEnum deviceTypeWindows;
    public WorkspaceAccessProperties withDeviceTypeWindows(AccessPropertyValueEnum deviceTypeWindows) {
        this.deviceTypeWindows = deviceTypeWindows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceTypeZeroClient")
    public AccessPropertyValueEnum deviceTypeZeroClient;
    public WorkspaceAccessProperties withDeviceTypeZeroClient(AccessPropertyValueEnum deviceTypeZeroClient) {
        this.deviceTypeZeroClient = deviceTypeZeroClient;
        return this;
    }
}