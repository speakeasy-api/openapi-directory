package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDeleteGeofenceResponse {
    @JsonProperty("Errors")
    public BatchDeleteGeofenceError[] errors;
    public BatchDeleteGeofenceResponse withErrors(BatchDeleteGeofenceError[] errors) {
        this.errors = errors;
        return this;
    }
}