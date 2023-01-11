package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResourceRelationshipsParentResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceRelationshipsParentResourceData data;
    public ResourceRelationshipsParentResource withData(ResourceRelationshipsParentResourceData data) {
        this.data = data;
        return this;
    }
}