package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchemaChangePolicy
 * A policy that specifies update and deletion behaviors for the crawler.
**/
public class SchemaChangePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteBehavior")
    public DeleteBehaviorEnum deleteBehavior;
    public SchemaChangePolicy withDeleteBehavior(DeleteBehaviorEnum deleteBehavior) {
        this.deleteBehavior = deleteBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateBehavior")
    public UpdateBehaviorEnum updateBehavior;
    public SchemaChangePolicy withUpdateBehavior(UpdateBehaviorEnum updateBehavior) {
        this.updateBehavior = updateBehavior;
        return this;
    }
}