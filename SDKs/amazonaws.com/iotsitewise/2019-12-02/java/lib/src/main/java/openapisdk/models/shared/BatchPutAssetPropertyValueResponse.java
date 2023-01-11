package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchPutAssetPropertyValueResponse {
    @JsonProperty("errorEntries")
    public BatchPutAssetPropertyErrorEntry[] errorEntries;
    public BatchPutAssetPropertyValueResponse withErrorEntries(BatchPutAssetPropertyErrorEntry[] errorEntries) {
        this.errorEntries = errorEntries;
        return this;
    }
}