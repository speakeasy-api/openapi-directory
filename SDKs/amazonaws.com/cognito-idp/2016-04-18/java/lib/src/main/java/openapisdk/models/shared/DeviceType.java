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
 * DeviceType
 * The device type.
**/
public class DeviceType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceAttributes")
    public AttributeType[] deviceAttributes;
    public DeviceType withDeviceAttributes(AttributeType[] deviceAttributes) {
        this.deviceAttributes = deviceAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeviceCreateDate")
    public OffsetDateTime deviceCreateDate;
    public DeviceType withDeviceCreateDate(OffsetDateTime deviceCreateDate) {
        this.deviceCreateDate = deviceCreateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceKey")
    public String deviceKey;
    public DeviceType withDeviceKey(String deviceKey) {
        this.deviceKey = deviceKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeviceLastAuthenticatedDate")
    public OffsetDateTime deviceLastAuthenticatedDate;
    public DeviceType withDeviceLastAuthenticatedDate(OffsetDateTime deviceLastAuthenticatedDate) {
        this.deviceLastAuthenticatedDate = deviceLastAuthenticatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeviceLastModifiedDate")
    public OffsetDateTime deviceLastModifiedDate;
    public DeviceType withDeviceLastModifiedDate(OffsetDateTime deviceLastModifiedDate) {
        this.deviceLastModifiedDate = deviceLastModifiedDate;
        return this;
    }
}