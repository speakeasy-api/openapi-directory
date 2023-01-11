package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SlackSourceProperties
 *  The properties that are applied when Slack is being used as a source. 
**/
public class SlackSourceProperties {
    @JsonProperty("object")
    public String object;
    public SlackSourceProperties withObject(String object) {
        this.object = object;
        return this;
    }
}