package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStoryForTaskRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.StoryRequestInput data;
    public CreateStoryForTaskRequestBodyInput withData(openapisdk.models.shared.StoryRequestInput data) {
        this.data = data;
        return this;
    }
}