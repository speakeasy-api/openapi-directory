package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostTokensRequestBody {
    @JsonProperty("active")
    public Boolean active;
    public PostTokensRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("channel")
    public PostTokensRequestBodyChannelEnum channel;
    public PostTokensRequestBody withChannel(PostTokensRequestBodyChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("driver")
    public String driver;
    public PostTokensRequestBody withDriver(String driver) {
        this.driver = driver;
        return this;
    }
    @JsonProperty("physicalId")
    public String physicalId;
    public PostTokensRequestBody withPhysicalId(String physicalId) {
        this.physicalId = physicalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PostTokensRequestBody withType(String type) {
        this.type = type;
        return this;
    }
}