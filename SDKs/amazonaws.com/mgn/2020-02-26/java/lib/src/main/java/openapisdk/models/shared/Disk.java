package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Disk
 * The disk identifier.
**/
public class Disk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bytes")
    public Long bytes;
    public Disk withBytes(Long bytes) {
        this.bytes = bytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public String deviceName;
    public Disk withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
}