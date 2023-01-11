package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchPutAssetPropertyValueRequestBody {
    @JsonProperty("entries")
    public openapisdk.models.shared.PutAssetPropertyValueEntry[] entries;
    public BatchPutAssetPropertyValueRequestBody withEntries(openapisdk.models.shared.PutAssetPropertyValueEntry[] entries) {
        this.entries = entries;
        return this;
    }
}