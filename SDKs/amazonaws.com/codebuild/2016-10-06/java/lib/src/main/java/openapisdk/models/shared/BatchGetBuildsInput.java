package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetBuildsInput {
    @JsonProperty("ids")
    public String[] ids;
    public BatchGetBuildsInput withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}