package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetPartitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Partitions")
    public Partition[] partitions;
    public BatchGetPartitionResponse withPartitions(Partition[] partitions) {
        this.partitions = partitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedKeys")
    public PartitionValueList[] unprocessedKeys;
    public BatchGetPartitionResponse withUnprocessedKeys(PartitionValueList[] unprocessedKeys) {
        this.unprocessedKeys = unprocessedKeys;
        return this;
    }
}