package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrendmicroSourceProperties
 *  The properties that are applied when using Trend Micro as a flow source. 
**/
public class TrendmicroSourceProperties {
    @JsonProperty("object")
    public String object;
    public TrendmicroSourceProperties withObject(String object) {
        this.object = object;
        return this;
    }
}