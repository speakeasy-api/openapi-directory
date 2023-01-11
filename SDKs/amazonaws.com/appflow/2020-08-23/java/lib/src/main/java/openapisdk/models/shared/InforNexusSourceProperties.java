package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InforNexusSourceProperties
 *  The properties that are applied when Infor Nexus is being used as a source. 
**/
public class InforNexusSourceProperties {
    @JsonProperty("object")
    public String object;
    public InforNexusSourceProperties withObject(String object) {
        this.object = object;
        return this;
    }
}