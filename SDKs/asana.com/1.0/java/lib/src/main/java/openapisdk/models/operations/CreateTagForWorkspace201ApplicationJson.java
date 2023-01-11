package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTagForWorkspace201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TagResponse data;
    public CreateTagForWorkspace201ApplicationJson withData(openapisdk.models.shared.TagResponse data) {
        this.data = data;
        return this;
    }
}