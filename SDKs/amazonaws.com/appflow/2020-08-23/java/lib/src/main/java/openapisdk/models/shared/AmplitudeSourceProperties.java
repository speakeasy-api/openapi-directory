package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AmplitudeSourceProperties
 *  The properties that are applied when Amplitude is being used as a source. 
**/
public class AmplitudeSourceProperties {
    @JsonProperty("object")
    public String object;
    public AmplitudeSourceProperties withObject(String object) {
        this.object = object;
        return this;
    }
}