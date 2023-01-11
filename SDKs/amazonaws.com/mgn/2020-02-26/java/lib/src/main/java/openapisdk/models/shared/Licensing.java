package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Licensing
 * Configure Licensing.
**/
public class Licensing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osByol")
    public Boolean osByol;
    public Licensing withOsByol(Boolean osByol) {
        this.osByol = osByol;
        return this;
    }
}