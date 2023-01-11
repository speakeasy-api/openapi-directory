package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTagsForWorkspace200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TagCompact[] data;
    public GetTagsForWorkspace200ApplicationJson withData(openapisdk.models.shared.TagCompact[] data) {
        this.data = data;
        return this;
    }
}