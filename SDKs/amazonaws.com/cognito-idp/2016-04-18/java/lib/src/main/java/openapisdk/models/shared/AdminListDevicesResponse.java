package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminListDevicesResponse
 * Lists the device's response, as an administrator.
**/
public class AdminListDevicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Devices")
    public DeviceType[] devices;
    public AdminListDevicesResponse withDevices(DeviceType[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public AdminListDevicesResponse withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
}