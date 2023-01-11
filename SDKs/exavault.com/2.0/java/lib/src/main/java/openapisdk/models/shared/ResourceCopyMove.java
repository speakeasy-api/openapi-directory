package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceCopyMove
 * Resource which was successfully copied or moved.
**/
public class ResourceCopyMove {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Resource data;
    public ResourceCopyMove withData(Resource data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public ResourceCopyMove withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
}