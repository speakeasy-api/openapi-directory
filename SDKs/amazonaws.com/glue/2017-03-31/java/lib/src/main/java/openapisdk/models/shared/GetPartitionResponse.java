package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPartitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Partition")
    public Partition partition;
    public GetPartitionResponse withPartition(Partition partition) {
        this.partition = partition;
        return this;
    }
}