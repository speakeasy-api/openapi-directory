package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomPluginDescription
 * Details about a custom plugin.
**/
public class CustomPluginDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customPluginArn")
    public String customPluginArn;
    public CustomPluginDescription withCustomPluginArn(String customPluginArn) {
        this.customPluginArn = customPluginArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public Long revision;
    public CustomPluginDescription withRevision(Long revision) {
        this.revision = revision;
        return this;
    }
}