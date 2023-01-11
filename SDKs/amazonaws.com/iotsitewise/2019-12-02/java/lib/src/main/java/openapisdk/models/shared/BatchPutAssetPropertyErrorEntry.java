package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchPutAssetPropertyErrorEntry
 * Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API.
**/
public class BatchPutAssetPropertyErrorEntry {
    @JsonProperty("entryId")
    public String entryId;
    public BatchPutAssetPropertyErrorEntry withEntryId(String entryId) {
        this.entryId = entryId;
        return this;
    }
    @JsonProperty("errors")
    public BatchPutAssetPropertyError[] errors;
    public BatchPutAssetPropertyErrorEntry withErrors(BatchPutAssetPropertyError[] errors) {
        this.errors = errors;
        return this;
    }
}