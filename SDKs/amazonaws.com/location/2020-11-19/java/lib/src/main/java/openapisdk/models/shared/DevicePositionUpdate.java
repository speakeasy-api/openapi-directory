package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DevicePositionUpdate
 * Contains the position update details for a device.
**/
public class DevicePositionUpdate {
    @JsonProperty("DeviceId")
    public String deviceId;
    public DevicePositionUpdate withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonProperty("Position")
    public Double[] position;
    public DevicePositionUpdate withPosition(Double[] position) {
        this.position = position;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("SampleTime")
    public OffsetDateTime sampleTime;
    public DevicePositionUpdate withSampleTime(OffsetDateTime sampleTime) {
        this.sampleTime = sampleTime;
        return this;
    }
}