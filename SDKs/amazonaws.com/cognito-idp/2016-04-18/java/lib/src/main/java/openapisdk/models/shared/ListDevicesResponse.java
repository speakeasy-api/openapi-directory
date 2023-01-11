package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDevicesResponse
 * Represents the response to list devices.
**/
public class ListDevicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Devices")
    public DeviceType[] devices;
    public ListDevicesResponse withDevices(DeviceType[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public ListDevicesResponse withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
}