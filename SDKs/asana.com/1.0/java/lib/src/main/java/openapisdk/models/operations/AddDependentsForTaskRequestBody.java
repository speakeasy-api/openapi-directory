package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddDependentsForTaskRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ModifyDependentsRequest data;
    public AddDependentsForTaskRequestBody withData(openapisdk.models.shared.ModifyDependentsRequest data) {
        this.data = data;
        return this;
    }
}