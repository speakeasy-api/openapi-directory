package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperatingSystemConfigurationManager
 * A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system.
**/
public class OperatingSystemConfigurationManager {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public OperatingSystemConfigurationManager withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public OperatingSystemConfigurationManager withVersion(String version) {
        this.version = version;
        return this;
    }
}