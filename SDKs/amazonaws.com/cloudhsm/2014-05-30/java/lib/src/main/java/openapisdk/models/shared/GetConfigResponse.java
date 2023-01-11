package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigCred")
    public String configCred;
    public GetConfigResponse withConfigCred(String configCred) {
        this.configCred = configCred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigFile")
    public String configFile;
    public GetConfigResponse withConfigFile(String configFile) {
        this.configFile = configFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigType")
    public String configType;
    public GetConfigResponse withConfigType(String configType) {
        this.configType = configType;
        return this;
    }
}