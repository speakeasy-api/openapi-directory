package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveMembersForProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.RemoveMembersRequest data;
    public RemoveMembersForProjectRequestBody withData(openapisdk.models.shared.RemoveMembersRequest data) {
        this.data = data;
        return this;
    }
}