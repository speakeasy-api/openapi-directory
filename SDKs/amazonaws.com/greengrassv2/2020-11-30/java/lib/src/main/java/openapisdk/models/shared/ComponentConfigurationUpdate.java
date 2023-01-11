package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComponentConfigurationUpdate
 * Contains information about a deployment's update to a component's configuration on Greengrass core devices. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html">Update component configurations</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
**/
public class ComponentConfigurationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merge")
    public String merge;
    public ComponentConfigurationUpdate withMerge(String merge) {
        this.merge = merge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reset")
    public String[] reset;
    public ComponentConfigurationUpdate withReset(String[] reset) {
        this.reset = reset;
        return this;
    }
}