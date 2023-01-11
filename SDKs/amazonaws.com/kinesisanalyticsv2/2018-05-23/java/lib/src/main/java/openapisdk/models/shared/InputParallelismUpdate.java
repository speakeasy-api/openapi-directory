package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputParallelismUpdate
 * For a SQL-based Kinesis Data Analytics application, provides updates to the parallelism count.
**/
public class InputParallelismUpdate {
    @JsonProperty("CountUpdate")
    public Long countUpdate;
    public InputParallelismUpdate withCountUpdate(Long countUpdate) {
        this.countUpdate = countUpdate;
        return this;
    }
}