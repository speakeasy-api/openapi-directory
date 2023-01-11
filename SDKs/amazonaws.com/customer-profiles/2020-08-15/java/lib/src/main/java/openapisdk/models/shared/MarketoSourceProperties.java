package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MarketoSourceProperties
 * The properties that are applied when Marketo is being used as a source.
**/
public class MarketoSourceProperties {
    @JsonProperty("Object")
    public String object;
    public MarketoSourceProperties withObject(String object) {
        this.object = object;
        return this;
    }
}