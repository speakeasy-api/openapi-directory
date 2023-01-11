package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StartApplicationRequest
 * <p/>
**/
public class StartApplicationRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public StartApplicationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("InputConfigurations")
    public InputConfiguration[] inputConfigurations;
    public StartApplicationRequest withInputConfigurations(InputConfiguration[] inputConfigurations) {
        this.inputConfigurations = inputConfigurations;
        return this;
    }
}