package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Parameters
 * Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type.
**/
public class Parameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExcludeBootVolume")
    public Boolean excludeBootVolume;
    public Parameters withExcludeBootVolume(Boolean excludeBootVolume) {
        this.excludeBootVolume = excludeBootVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NoReboot")
    public Boolean noReboot;
    public Parameters withNoReboot(Boolean noReboot) {
        this.noReboot = noReboot;
        return this;
    }
}