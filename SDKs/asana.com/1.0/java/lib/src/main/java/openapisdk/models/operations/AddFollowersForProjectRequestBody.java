package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddFollowersForProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.AddFollowersRequest data;
    public AddFollowersForProjectRequestBody withData(openapisdk.models.shared.AddFollowersRequest data) {
        this.data = data;
        return this;
    }
}