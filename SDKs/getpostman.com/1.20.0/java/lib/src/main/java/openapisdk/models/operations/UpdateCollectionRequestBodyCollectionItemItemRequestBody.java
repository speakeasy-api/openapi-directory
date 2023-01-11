package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCollectionRequestBodyCollectionItemItemRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public String mode;
    public UpdateCollectionRequestBodyCollectionItemItemRequestBody withMode(String mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("raw")
    public String raw;
    public UpdateCollectionRequestBodyCollectionItemItemRequestBody withRaw(String raw) {
        this.raw = raw;
        return this;
    }
}