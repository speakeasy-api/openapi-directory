package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchTokenRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public PatchTokenRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public PatchTokenRequestBodyChannelEnum channel;
    public PatchTokenRequestBody withChannel(PatchTokenRequestBodyChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driver")
    public String driver;
    public PatchTokenRequestBody withDriver(String driver) {
        this.driver = driver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("physicalId")
    public String physicalId;
    public PatchTokenRequestBody withPhysicalId(String physicalId) {
        this.physicalId = physicalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PatchTokenRequestBody withType(String type) {
        this.type = type;
        return this;
    }
}