package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceSelectionResult
 * Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.
**/
public class DeviceSelectionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public DeviceFilter[] filters;
    public DeviceSelectionResult withFilters(DeviceFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchedDevicesCount")
    public Long matchedDevicesCount;
    public DeviceSelectionResult withMatchedDevicesCount(Long matchedDevicesCount) {
        this.matchedDevicesCount = matchedDevicesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDevices")
    public Long maxDevices;
    public DeviceSelectionResult withMaxDevices(Long maxDevices) {
        this.maxDevices = maxDevices;
        return this;
    }
}