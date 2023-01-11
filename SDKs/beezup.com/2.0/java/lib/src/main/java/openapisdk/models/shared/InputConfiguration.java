package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputConfiguration
 * Describe the input configuration
**/
public class InputConfiguration {
    @JsonProperty("files")
    public InputFileConfiguration[] files;
    public InputConfiguration withFiles(InputFileConfiguration[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformFileUrl")
    public String transformFileUrl;
    public InputConfiguration withTransformFileUrl(String transformFileUrl) {
        this.transformFileUrl = transformFileUrl;
        return this;
    }
}