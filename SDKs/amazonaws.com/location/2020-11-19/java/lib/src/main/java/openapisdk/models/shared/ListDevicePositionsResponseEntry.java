package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ListDevicePositionsResponseEntry
 * Contains the tracker resource details.
**/
public class ListDevicePositionsResponseEntry {
    @JsonProperty("DeviceId")
    public String deviceId;
    public ListDevicePositionsResponseEntry withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonProperty("Position")
    public Double[] position;
    public ListDevicePositionsResponseEntry withPosition(Double[] position) {
        this.position = position;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("SampleTime")
    public OffsetDateTime sampleTime;
    public ListDevicePositionsResponseEntry withSampleTime(OffsetDateTime sampleTime) {
        this.sampleTime = sampleTime;
        return this;
    }
}