package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShareShareRelationshipsShareRelationshipsOwner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ShareShareRelationshipsShareRelationshipsOwnerData data;
    public ShareShareRelationshipsShareRelationshipsOwner withData(ShareShareRelationshipsShareRelationshipsOwnerData data) {
        this.data = data;
        return this;
    }
}