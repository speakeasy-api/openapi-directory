package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomPlugin
 * A plugin is an AWS resource that contains the code that defines a connector's logic.
**/
public class CustomPlugin {
    @JsonProperty("customPluginArn")
    public String customPluginArn;
    public CustomPlugin withCustomPluginArn(String customPluginArn) {
        this.customPluginArn = customPluginArn;
        return this;
    }
    @JsonProperty("revision")
    public Long revision;
    public CustomPlugin withRevision(Long revision) {
        this.revision = revision;
        return this;
    }
}