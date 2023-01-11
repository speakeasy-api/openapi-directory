package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartImageBuilderResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageBuilder")
    public ImageBuilder imageBuilder;
    public StartImageBuilderResult withImageBuilder(ImageBuilder imageBuilder) {
        this.imageBuilder = imageBuilder;
        return this;
    }
}