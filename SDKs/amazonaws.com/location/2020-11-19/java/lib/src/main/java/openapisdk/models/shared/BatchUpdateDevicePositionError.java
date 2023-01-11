package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BatchUpdateDevicePositionError
 * Contains error details for each device that failed to update its position.
**/
public class BatchUpdateDevicePositionError {
    @JsonProperty("DeviceId")
    public String deviceId;
    public BatchUpdateDevicePositionError withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonProperty("Error")
    public BatchItemError error;
    public BatchUpdateDevicePositionError withError(BatchItemError error) {
        this.error = error;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("SampleTime")
    public OffsetDateTime sampleTime;
    public BatchUpdateDevicePositionError withSampleTime(OffsetDateTime sampleTime) {
        this.sampleTime = sampleTime;
        return this;
    }
}