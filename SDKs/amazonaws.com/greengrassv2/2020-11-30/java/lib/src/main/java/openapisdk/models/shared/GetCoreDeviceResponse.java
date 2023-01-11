package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetCoreDeviceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("architecture")
    public String architecture;
    public GetCoreDeviceResponse withArchitecture(String architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coreDeviceThingName")
    public String coreDeviceThingName;
    public GetCoreDeviceResponse withCoreDeviceThingName(String coreDeviceThingName) {
        this.coreDeviceThingName = coreDeviceThingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coreVersion")
    public String coreVersion;
    public GetCoreDeviceResponse withCoreVersion(String coreVersion) {
        this.coreVersion = coreVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastStatusUpdateTimestamp")
    public OffsetDateTime lastStatusUpdateTimestamp;
    public GetCoreDeviceResponse withLastStatusUpdateTimestamp(OffsetDateTime lastStatusUpdateTimestamp) {
        this.lastStatusUpdateTimestamp = lastStatusUpdateTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public String platform;
    public GetCoreDeviceResponse withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CoreDeviceStatusEnum status;
    public GetCoreDeviceResponse withStatus(CoreDeviceStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public GetCoreDeviceResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}