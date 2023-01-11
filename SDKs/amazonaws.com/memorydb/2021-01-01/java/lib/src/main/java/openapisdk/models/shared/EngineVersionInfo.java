package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EngineVersionInfo
 * Provides details of the Redis engine version
**/
public class EngineVersionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnginePatchVersion")
    public String enginePatchVersion;
    public EngineVersionInfo withEnginePatchVersion(String enginePatchVersion) {
        this.enginePatchVersion = enginePatchVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineVersion")
    public String engineVersion;
    public EngineVersionInfo withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterGroupFamily")
    public String parameterGroupFamily;
    public EngineVersionInfo withParameterGroupFamily(String parameterGroupFamily) {
        this.parameterGroupFamily = parameterGroupFamily;
        return this;
    }
}