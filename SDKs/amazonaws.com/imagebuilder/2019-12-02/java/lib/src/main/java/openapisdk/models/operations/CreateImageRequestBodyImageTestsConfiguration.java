package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateImageRequestBodyImageTestsConfiguration
 * Image tests configuration.
**/
public class CreateImageRequestBodyImageTestsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTestsEnabled")
    public Boolean imageTestsEnabled;
    public CreateImageRequestBodyImageTestsConfiguration withImageTestsEnabled(Boolean imageTestsEnabled) {
        this.imageTestsEnabled = imageTestsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutMinutes")
    public Long timeoutMinutes;
    public CreateImageRequestBodyImageTestsConfiguration withTimeoutMinutes(Long timeoutMinutes) {
        this.timeoutMinutes = timeoutMinutes;
        return this;
    }
}