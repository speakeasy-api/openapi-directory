package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDeleteImageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public ImageFailure[] failures;
    public BatchDeleteImageResponse withFailures(ImageFailure[] failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageIds")
    public ImageIdentifier[] imageIds;
    public BatchDeleteImageResponse withImageIds(ImageIdentifier[] imageIds) {
        this.imageIds = imageIds;
        return this;
    }
}