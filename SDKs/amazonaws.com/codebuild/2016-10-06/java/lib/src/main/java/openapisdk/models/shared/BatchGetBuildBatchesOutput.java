package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetBuildBatchesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildBatches")
    public BuildBatch[] buildBatches;
    public BatchGetBuildBatchesOutput withBuildBatches(BuildBatch[] buildBatches) {
        this.buildBatches = buildBatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildBatchesNotFound")
    public String[] buildBatchesNotFound;
    public BatchGetBuildBatchesOutput withBuildBatchesNotFound(String[] buildBatchesNotFound) {
        this.buildBatchesNotFound = buildBatchesNotFound;
        return this;
    }
}