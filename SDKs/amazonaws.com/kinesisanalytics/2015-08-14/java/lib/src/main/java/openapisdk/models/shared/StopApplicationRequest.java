package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StopApplicationRequest
 * <p/>
**/
public class StopApplicationRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public StopApplicationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
}