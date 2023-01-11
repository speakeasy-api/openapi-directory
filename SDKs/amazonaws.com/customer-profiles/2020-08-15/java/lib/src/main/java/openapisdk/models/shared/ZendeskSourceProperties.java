package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ZendeskSourceProperties
 * The properties that are applied when using Zendesk as a flow source.
**/
public class ZendeskSourceProperties {
    @JsonProperty("Object")
    public String object;
    public ZendeskSourceProperties withObject(String object) {
        this.object = object;
        return this;
    }
}