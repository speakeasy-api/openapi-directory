package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddApplicationInputRequest
 * <p/>
**/
public class AddApplicationInputRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public AddApplicationInputRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public AddApplicationInputRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
    @JsonProperty("Input")
    public Input input;
    public AddApplicationInputRequest withInput(Input input) {
        this.input = input;
        return this;
    }
}