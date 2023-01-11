package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDatastoreRequestBodyDatastorePartitions
 *  Contains information about the partition dimensions in a data store. 
**/
public class CreateDatastoreRequestBodyDatastorePartitions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partitions")
    public openapisdk.models.shared.DatastorePartition[] partitions;
    public CreateDatastoreRequestBodyDatastorePartitions withPartitions(openapisdk.models.shared.DatastorePartition[] partitions) {
        this.partitions = partitions;
        return this;
    }
}