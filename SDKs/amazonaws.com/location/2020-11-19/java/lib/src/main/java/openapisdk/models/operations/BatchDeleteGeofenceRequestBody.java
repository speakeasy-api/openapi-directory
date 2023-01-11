package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDeleteGeofenceRequestBody {
    @JsonProperty("GeofenceIds")
    public String[] geofenceIds;
    public BatchDeleteGeofenceRequestBody withGeofenceIds(String[] geofenceIds) {
        this.geofenceIds = geofenceIds;
        return this;
    }
}