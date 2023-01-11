package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigListItem
 * An item in a list of <code>Config</code> objects.
**/
public class ConfigListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configArn")
    public String configArn;
    public ConfigListItem withConfigArn(String configArn) {
        this.configArn = configArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configId")
    public String configId;
    public ConfigListItem withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configType")
    public ConfigCapabilityTypeEnum configType;
    public ConfigListItem withConfigType(ConfigCapabilityTypeEnum configType) {
        this.configType = configType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConfigListItem withName(String name) {
        this.name = name;
        return this;
    }
}