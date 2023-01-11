package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTagForWorkspaceRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TagResponseInput data;
    public CreateTagForWorkspaceRequestBodyInput withData(openapisdk.models.shared.TagResponseInput data) {
        this.data = data;
        return this;
    }
}