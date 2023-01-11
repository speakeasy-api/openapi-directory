package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateHapgRequest
 * Contains the inputs for the <a>CreateHapgRequest</a> action.
**/
public class CreateHapgRequest {
    @JsonProperty("Label")
    public String label;
    public CreateHapgRequest withLabel(String label) {
        this.label = label;
        return this;
    }
}