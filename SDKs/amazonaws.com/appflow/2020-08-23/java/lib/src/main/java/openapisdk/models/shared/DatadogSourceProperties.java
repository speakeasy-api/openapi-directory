package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DatadogSourceProperties
 *  The properties that are applied when Datadog is being used as a source. 
**/
public class DatadogSourceProperties {
    @JsonProperty("object")
    public String object;
    public DatadogSourceProperties withObject(String object) {
        this.object = object;
        return this;
    }
}