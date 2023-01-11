package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DevicePosition
 * Contains the device position details.
**/
public class DevicePosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceId")
    public String deviceId;
    public DevicePosition withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonProperty("Position")
    public Double[] position;
    public DevicePosition withPosition(Double[] position) {
        this.position = position;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ReceivedTime")
    public OffsetDateTime receivedTime;
    public DevicePosition withReceivedTime(OffsetDateTime receivedTime) {
        this.receivedTime = receivedTime;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("SampleTime")
    public OffsetDateTime sampleTime;
    public DevicePosition withSampleTime(OffsetDateTime sampleTime) {
        this.sampleTime = sampleTime;
        return this;
    }
}