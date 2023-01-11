package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleAnalyticsSourceProperties
 *  The properties that are applied when Google Analytics is being used as a source. 
**/
public class GoogleAnalyticsSourceProperties {
    @JsonProperty("object")
    public String object;
    public GoogleAnalyticsSourceProperties withObject(String object) {
        this.object = object;
        return this;
    }
}