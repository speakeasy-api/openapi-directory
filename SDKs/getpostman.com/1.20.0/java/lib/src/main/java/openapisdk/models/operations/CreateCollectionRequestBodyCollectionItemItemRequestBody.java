package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollectionRequestBodyCollectionItemItemRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public String mode;
    public CreateCollectionRequestBodyCollectionItemItemRequestBody withMode(String mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("raw")
    public String raw;
    public CreateCollectionRequestBodyCollectionItemItemRequestBody withRaw(String raw) {
        this.raw = raw;
        return this;
    }
}