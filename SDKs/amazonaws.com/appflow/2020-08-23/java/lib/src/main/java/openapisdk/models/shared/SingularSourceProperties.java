package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SingularSourceProperties
 *  The properties that are applied when Singular is being used as a source. 
**/
public class SingularSourceProperties {
    @JsonProperty("object")
    public String object;
    public SingularSourceProperties withObject(String object) {
        this.object = object;
        return this;
    }
}