package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResourceRelationshipsDirectFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceRelationshipsDirectFileData data;
    public ResourceRelationshipsDirectFile withData(ResourceRelationshipsDirectFileData data) {
        this.data = data;
        return this;
    }
}