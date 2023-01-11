package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InAppMessage
 * Provides all fields required for building an in-app message.
**/
public class InAppMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Content")
    public InAppMessageContent[] content;
    public InAppMessage withContent(InAppMessageContent[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomConfig")
    public java.util.Map<String, String> customConfig;
    public InAppMessage withCustomConfig(java.util.Map<String, String> customConfig) {
        this.customConfig = customConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Layout")
    public LayoutEnum layout;
    public InAppMessage withLayout(LayoutEnum layout) {
        this.layout = layout;
        return this;
    }
}