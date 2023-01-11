package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStoryForTask201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.StoryResponse data;
    public CreateStoryForTask201ApplicationJson withData(openapisdk.models.shared.StoryResponse data) {
        this.data = data;
        return this;
    }
}