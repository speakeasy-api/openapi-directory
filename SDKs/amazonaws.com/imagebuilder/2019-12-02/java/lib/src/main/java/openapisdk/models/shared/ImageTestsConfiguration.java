package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageTestsConfiguration
 * Image tests configuration.
**/
public class ImageTestsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTestsEnabled")
    public Boolean imageTestsEnabled;
    public ImageTestsConfiguration withImageTestsEnabled(Boolean imageTestsEnabled) {
        this.imageTestsEnabled = imageTestsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutMinutes")
    public Long timeoutMinutes;
    public ImageTestsConfiguration withTimeoutMinutes(Long timeoutMinutes) {
        this.timeoutMinutes = timeoutMinutes;
        return this;
    }
}