package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageConfigResponse
 * Response to GetFunctionConfiguration request.
**/
public class ImageConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public ImageConfigError error;
    public ImageConfigResponse withError(ImageConfigError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageConfig")
    public ImageConfig imageConfig;
    public ImageConfigResponse withImageConfig(ImageConfig imageConfig) {
        this.imageConfig = imageConfig;
        return this;
    }
}