package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetImageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public ImageFailure[] failures;
    public BatchGetImageResponse withFailures(ImageFailure[] failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public Image[] images;
    public BatchGetImageResponse withImages(Image[] images) {
        this.images = images;
        return this;
    }
}