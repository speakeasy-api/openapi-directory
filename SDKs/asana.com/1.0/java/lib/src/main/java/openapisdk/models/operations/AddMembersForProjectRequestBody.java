package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddMembersForProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.AddMembersRequest data;
    public AddMembersForProjectRequestBody withData(openapisdk.models.shared.AddMembersRequest data) {
        this.data = data;
        return this;
    }
}