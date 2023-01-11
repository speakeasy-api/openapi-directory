package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartSuiteRunRequestBodySuiteRunConfiguration
 * Gets suite run configuration.
**/
public class StartSuiteRunRequestBodySuiteRunConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryDevice")
    public openapisdk.models.shared.DeviceUnderTest primaryDevice;
    public StartSuiteRunRequestBodySuiteRunConfiguration withPrimaryDevice(openapisdk.models.shared.DeviceUnderTest primaryDevice) {
        this.primaryDevice = primaryDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedTestList")
    public String[] selectedTestList;
    public StartSuiteRunRequestBodySuiteRunConfiguration withSelectedTestList(String[] selectedTestList) {
        this.selectedTestList = selectedTestList;
        return this;
    }
}