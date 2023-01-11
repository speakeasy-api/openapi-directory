package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PlatformDevice
 * The devices that are available on the container instance. The only supported device type is a GPU.
**/
public class PlatformDevice {
    @JsonProperty("id")
    public String id;
    public PlatformDevice withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public PlatformDeviceTypeEnum type;
    public PlatformDevice withType(PlatformDeviceTypeEnum type) {
        this.type = type;
        return this;
    }
}