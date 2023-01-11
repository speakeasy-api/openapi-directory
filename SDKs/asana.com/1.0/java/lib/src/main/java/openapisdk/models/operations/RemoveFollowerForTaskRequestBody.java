package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveFollowerForTaskRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TaskRemoveFollowersRequest data;
    public RemoveFollowerForTaskRequestBody withData(openapisdk.models.shared.TaskRemoveFollowersRequest data) {
        this.data = data;
        return this;
    }
}