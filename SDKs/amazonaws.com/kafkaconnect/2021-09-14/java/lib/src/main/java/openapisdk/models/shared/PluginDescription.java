package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PluginDescription
 * The description of the plugin.
**/
public class PluginDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customPlugin")
    public CustomPluginDescription customPlugin;
    public PluginDescription withCustomPlugin(CustomPluginDescription customPlugin) {
        this.customPlugin = customPlugin;
        return this;
    }
}