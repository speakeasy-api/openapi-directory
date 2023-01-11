package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchPutGeofenceRequestBody {
    @JsonProperty("Entries")
    public openapisdk.models.shared.BatchPutGeofenceRequestEntry[] entries;
    public BatchPutGeofenceRequestBody withEntries(openapisdk.models.shared.BatchPutGeofenceRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
}