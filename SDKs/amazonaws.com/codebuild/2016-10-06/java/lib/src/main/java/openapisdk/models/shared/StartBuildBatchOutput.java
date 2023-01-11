package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartBuildBatchOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildBatch")
    public BuildBatch buildBatch;
    public StartBuildBatchOutput withBuildBatch(BuildBatch buildBatch) {
        this.buildBatch = buildBatch;
        return this;
    }
}