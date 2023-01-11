package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceBlockDeviceMapping
 * The description of a block device mapping.
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
    public EbsInstanceBlockDevice ebs;
    public InstanceBlockDeviceMapping withEbs(EbsInstanceBlockDevice ebs) {
        this.ebs = ebs;
        return this;
    }
}