package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceBlockDeviceMapping
 * Defines block device mappings for the instance used to configure your image.
**/
public class InstanceBlockDeviceMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public String deviceName;
    public InstanceBlockDeviceMapping withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ebs")
    public EbsInstanceBlockDeviceSpecification ebs;
    public InstanceBlockDeviceMapping withEbs(EbsInstanceBlockDeviceSpecification ebs) {
        this.ebs = ebs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noDevice")
    public String noDevice;
    public InstanceBlockDeviceMapping withNoDevice(String noDevice) {
        this.noDevice = noDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualName")
    public String virtualName;
    public InstanceBlockDeviceMapping withVirtualName(String virtualName) {
        this.virtualName = virtualName;
        return this;
    }
}