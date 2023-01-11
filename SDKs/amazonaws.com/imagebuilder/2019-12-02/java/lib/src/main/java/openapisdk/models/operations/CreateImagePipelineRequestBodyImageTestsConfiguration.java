package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateImagePipelineRequestBodyImageTestsConfiguration
 * Image tests configuration.
**/
public class CreateImagePipelineRequestBodyImageTestsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTestsEnabled")
    public Boolean imageTestsEnabled;
    public CreateImagePipelineRequestBodyImageTestsConfiguration withImageTestsEnabled(Boolean imageTestsEnabled) {
        this.imageTestsEnabled = imageTestsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutMinutes")
    public Long timeoutMinutes;
    public CreateImagePipelineRequestBodyImageTestsConfiguration withTimeoutMinutes(Long timeoutMinutes) {
        this.timeoutMinutes = timeoutMinutes;
        return this;
    }
}