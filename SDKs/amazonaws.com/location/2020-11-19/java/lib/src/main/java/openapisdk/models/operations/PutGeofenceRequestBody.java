package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutGeofenceRequestBody {
    @JsonProperty("Geometry")
    public PutGeofenceRequestBodyGeometry geometry;
    public PutGeofenceRequestBody withGeometry(PutGeofenceRequestBodyGeometry geometry) {
        this.geometry = geometry;
        return this;
    }
}