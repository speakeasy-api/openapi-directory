package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchPutGeofenceResponse {
    @JsonProperty("Errors")
    public BatchPutGeofenceError[] errors;
    public BatchPutGeofenceResponse withErrors(BatchPutGeofenceError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("Successes")
    public BatchPutGeofenceSuccess[] successes;
    public BatchPutGeofenceResponse withSuccesses(BatchPutGeofenceSuccess[] successes) {
        this.successes = successes;
        return this;
    }
}