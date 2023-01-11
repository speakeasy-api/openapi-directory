package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeviceSelectionConfiguration
 * Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.
**/
public class DeviceSelectionConfiguration {
    @JsonProperty("filters")
    public DeviceFilter[] filters;
    public DeviceSelectionConfiguration withFilters(DeviceFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonProperty("maxDevices")
    public Long maxDevices;
    public DeviceSelectionConfiguration withMaxDevices(Long maxDevices) {
        this.maxDevices = maxDevices;
        return this;
    }
}