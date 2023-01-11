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
 * CoreDevice
 * Contains information about a Greengrass core device, which is an IoT thing that runs the IoT Greengrass Core software.
**/
public class CoreDevice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coreDeviceThingName")
    public String coreDeviceThingName;
    public CoreDevice withCoreDeviceThingName(String coreDeviceThingName) {
        this.coreDeviceThingName = coreDeviceThingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastStatusUpdateTimestamp")
    public OffsetDateTime lastStatusUpdateTimestamp;
    public CoreDevice withLastStatusUpdateTimestamp(OffsetDateTime lastStatusUpdateTimestamp) {
        this.lastStatusUpdateTimestamp = lastStatusUpdateTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CoreDeviceStatusEnum status;
    public CoreDevice withStatus(CoreDeviceStatusEnum status) {
        this.status = status;
        return this;
    }
}