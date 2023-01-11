package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComponentRunWith
 * Contains information system user and group that the IoT Greengrass Core software uses to run component processes on the core device. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
**/
public class ComponentRunWith {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posixUser")
    public String posixUser;
    public ComponentRunWith withPosixUser(String posixUser) {
        this.posixUser = posixUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemResourceLimits")
    public SystemResourceLimits systemResourceLimits;
    public ComponentRunWith withSystemResourceLimits(SystemResourceLimits systemResourceLimits) {
        this.systemResourceLimits = systemResourceLimits;
        return this;
    }
}