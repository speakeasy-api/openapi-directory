package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddApplicationOutputRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public AddApplicationOutputRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public AddApplicationOutputRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
    @JsonProperty("Output")
    public Output output;
    public AddApplicationOutputRequest withOutput(Output output) {
        this.output = output;
        return this;
    }
}