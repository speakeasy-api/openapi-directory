package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchPutAssetPropertyError
 * Contains error information from updating a batch of asset property values.
**/
public class BatchPutAssetPropertyError {
    @JsonProperty("errorCode")
    public BatchPutAssetPropertyValueErrorCodeEnum errorCode;
    public BatchPutAssetPropertyError withErrorCode(BatchPutAssetPropertyValueErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonProperty("errorMessage")
    public String errorMessage;
    public BatchPutAssetPropertyError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonProperty("timestamps")
    public TimeInNanos[] timestamps;
    public BatchPutAssetPropertyError withTimestamps(TimeInNanos[] timestamps) {
        this.timestamps = timestamps;
        return this;
    }
}