package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteResourcesByExternalIdInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public DeleteResourcesByExternalIdInput withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
}