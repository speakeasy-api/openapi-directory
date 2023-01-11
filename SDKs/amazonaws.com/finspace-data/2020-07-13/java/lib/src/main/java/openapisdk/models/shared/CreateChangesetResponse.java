package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateChangesetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeset")
    public ChangesetInfo changeset;
    public CreateChangesetResponse withChangeset(ChangesetInfo changeset) {
        this.changeset = changeset;
        return this;
    }
}