package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchUpdatePartitionRequestEntry
 * A structure that contains the values and structure used to update a partition.
**/
public class BatchUpdatePartitionRequestEntry {
    @JsonProperty("PartitionInput")
    public PartitionInput partitionInput;
    public BatchUpdatePartitionRequestEntry withPartitionInput(PartitionInput partitionInput) {
        this.partitionInput = partitionInput;
        return this;
    }
    @JsonProperty("PartitionValueList")
    public String[] partitionValueList;
    public BatchUpdatePartitionRequestEntry withPartitionValueList(String[] partitionValueList) {
        this.partitionValueList = partitionValueList;
        return this;
    }
}