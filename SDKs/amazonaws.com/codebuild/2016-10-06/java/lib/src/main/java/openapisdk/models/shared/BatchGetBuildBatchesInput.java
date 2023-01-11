package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetBuildBatchesInput {
    @JsonProperty("ids")
    public String[] ids;
    public BatchGetBuildBatchesInput withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}