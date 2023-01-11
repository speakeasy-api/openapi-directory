package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatastoreStatistics
 * Statistical information about the data store.
**/
public class DatastoreStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public EstimatedResourceSize size;
    public DatastoreStatistics withSize(EstimatedResourceSize size) {
        this.size = size;
        return this;
    }
}