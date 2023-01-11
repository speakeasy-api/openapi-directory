package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigIdResponse
 * <p/>
**/
public class ConfigIdResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configArn")
    public String configArn;
    public ConfigIdResponse withConfigArn(String configArn) {
        this.configArn = configArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configId")
    public String configId;
    public ConfigIdResponse withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configType")
    public ConfigCapabilityTypeEnum configType;
    public ConfigIdResponse withConfigType(ConfigCapabilityTypeEnum configType) {
        this.configType = configType;
        return this;
    }
}