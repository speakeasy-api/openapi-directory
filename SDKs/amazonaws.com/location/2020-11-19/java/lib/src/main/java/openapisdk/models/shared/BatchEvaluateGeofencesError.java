package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BatchEvaluateGeofencesError
 * Contains error details for each device that failed to evaluate its position against the geofences in a given geofence collection.
**/
public class BatchEvaluateGeofencesError {
    @JsonProperty("DeviceId")
    public String deviceId;
    public BatchEvaluateGeofencesError withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonProperty("Error")
    public BatchItemError error;
    public BatchEvaluateGeofencesError withError(BatchItemError error) {
        this.error = error;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("SampleTime")
    public OffsetDateTime sampleTime;
    public BatchEvaluateGeofencesError withSampleTime(OffsetDateTime sampleTime) {
        this.sampleTime = sampleTime;
        return this;
    }
}