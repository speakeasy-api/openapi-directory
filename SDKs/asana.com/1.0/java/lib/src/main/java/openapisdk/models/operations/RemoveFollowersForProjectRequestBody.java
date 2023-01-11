package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveFollowersForProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.RemoveFollowersRequest data;
    public RemoveFollowersForProjectRequestBody withData(openapisdk.models.shared.RemoveFollowersRequest data) {
        this.data = data;
        return this;
    }
}