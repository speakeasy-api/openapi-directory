package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStory200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.StoryResponse data;
    public UpdateStory200ApplicationJson withData(openapisdk.models.shared.StoryResponse data) {
        this.data = data;
        return this;
    }
}