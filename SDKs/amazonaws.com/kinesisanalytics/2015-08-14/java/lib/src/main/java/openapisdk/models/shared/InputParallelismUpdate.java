package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputParallelismUpdate
 * Provides updates to the parallelism count.
**/
public class InputParallelismUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountUpdate")
    public Long countUpdate;
    public InputParallelismUpdate withCountUpdate(Long countUpdate) {
        this.countUpdate = countUpdate;
        return this;
    }
}