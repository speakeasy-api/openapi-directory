package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NewDeviceMetadataType
 * The new device metadata type.
**/
public class NewDeviceMetadataType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceGroupKey")
    public String deviceGroupKey;
    public NewDeviceMetadataType withDeviceGroupKey(String deviceGroupKey) {
        this.deviceGroupKey = deviceGroupKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceKey")
    public String deviceKey;
    public NewDeviceMetadataType withDeviceKey(String deviceKey) {
        this.deviceKey = deviceKey;
        return this;
    }
}