package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScheduleRunRequest
 * Represents a request to the schedule run operation.
**/
public class ScheduleRunRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appArn")
    public String appArn;
    public ScheduleRunRequest withAppArn(String appArn) {
        this.appArn = appArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public ScheduleRunConfiguration configuration;
    public ScheduleRunRequest withConfiguration(ScheduleRunConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicePoolArn")
    public String devicePoolArn;
    public ScheduleRunRequest withDevicePoolArn(String devicePoolArn) {
        this.devicePoolArn = devicePoolArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceSelectionConfiguration")
    public DeviceSelectionConfiguration deviceSelectionConfiguration;
    public ScheduleRunRequest withDeviceSelectionConfiguration(DeviceSelectionConfiguration deviceSelectionConfiguration) {
        this.deviceSelectionConfiguration = deviceSelectionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionConfiguration")
    public ExecutionConfiguration executionConfiguration;
    public ScheduleRunRequest withExecutionConfiguration(ExecutionConfiguration executionConfiguration) {
        this.executionConfiguration = executionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ScheduleRunRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("projectArn")
    public String projectArn;
    public ScheduleRunRequest withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    @JsonProperty("test")
    public ScheduleRunTest test;
    public ScheduleRunRequest withTest(ScheduleRunTest test) {
        this.test = test;
        return this;
    }
}