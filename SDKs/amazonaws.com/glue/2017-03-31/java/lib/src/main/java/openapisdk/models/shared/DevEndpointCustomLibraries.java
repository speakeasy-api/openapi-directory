package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DevEndpointCustomLibraries
 * Custom libraries to be loaded into a development endpoint.
**/
public class DevEndpointCustomLibraries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtraJarsS3Path")
    public String extraJarsS3Path;
    public DevEndpointCustomLibraries withExtraJarsS3Path(String extraJarsS3Path) {
        this.extraJarsS3Path = extraJarsS3Path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtraPythonLibsS3Path")
    public String extraPythonLibsS3Path;
    public DevEndpointCustomLibraries withExtraPythonLibsS3Path(String extraPythonLibsS3Path) {
        this.extraPythonLibsS3Path = extraPythonLibsS3Path;
        return this;
    }
}