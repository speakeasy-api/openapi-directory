package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatastorePartitions
 *  Contains information about the partition dimensions in a data store. 
**/
public class DatastorePartitions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partitions")
    public DatastorePartition[] partitions;
    public DatastorePartitions withPartitions(DatastorePartition[] partitions) {
        this.partitions = partitions;
        return this;
    }
}