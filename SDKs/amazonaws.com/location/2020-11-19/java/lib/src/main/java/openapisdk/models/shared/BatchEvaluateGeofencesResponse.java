package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchEvaluateGeofencesResponse {
    @JsonProperty("Errors")
    public BatchEvaluateGeofencesError[] errors;
    public BatchEvaluateGeofencesResponse withErrors(BatchEvaluateGeofencesError[] errors) {
        this.errors = errors;
        return this;
    }
}