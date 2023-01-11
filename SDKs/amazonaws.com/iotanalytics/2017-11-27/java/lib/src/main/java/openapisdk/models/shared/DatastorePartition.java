package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatastorePartition
 *  A single dimension to partition a data store. The dimension must be an <code>AttributePartition</code> or a <code>TimestampPartition</code>. 
**/
public class DatastorePartition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributePartition")
    public Partition attributePartition;
    public DatastorePartition withAttributePartition(Partition attributePartition) {
        this.attributePartition = attributePartition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestampPartition")
    public TimestampPartition timestampPartition;
    public DatastorePartition withTimestampPartition(TimestampPartition timestampPartition) {
        this.timestampPartition = timestampPartition;
        return this;
    }
}