package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveDependenciesForTaskRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ModifyDependenciesRequest data;
    public RemoveDependenciesForTaskRequestBody withData(openapisdk.models.shared.ModifyDependenciesRequest data) {
        this.data = data;
        return this;
    }
}