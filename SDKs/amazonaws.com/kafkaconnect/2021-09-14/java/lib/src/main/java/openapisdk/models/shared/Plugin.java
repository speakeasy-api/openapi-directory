package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Plugin
 * A plugin is an AWS resource that contains the code that defines your connector logic. 
**/
public class Plugin {
    @JsonProperty("customPlugin")
    public CustomPlugin customPlugin;
    public Plugin withCustomPlugin(CustomPlugin customPlugin) {
        this.customPlugin = customPlugin;
        return this;
    }
}