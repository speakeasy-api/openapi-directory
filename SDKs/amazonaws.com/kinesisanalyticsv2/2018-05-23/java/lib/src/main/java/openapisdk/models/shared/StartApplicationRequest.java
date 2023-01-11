package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartApplicationRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public StartApplicationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunConfiguration")
    public RunConfiguration runConfiguration;
    public StartApplicationRequest withRunConfiguration(RunConfiguration runConfiguration) {
        this.runConfiguration = runConfiguration;
        return this;
    }
}