package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuiteRunConfiguration
 * Gets suite run configuration.
**/
public class SuiteRunConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryDevice")
    public DeviceUnderTest primaryDevice;
    public SuiteRunConfiguration withPrimaryDevice(DeviceUnderTest primaryDevice) {
        this.primaryDevice = primaryDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedTestList")
    public String[] selectedTestList;
    public SuiteRunConfiguration withSelectedTestList(String[] selectedTestList) {
        this.selectedTestList = selectedTestList;
        return this;
    }
}