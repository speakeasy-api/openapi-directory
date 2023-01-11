package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DisableActionConfiguration
 * Contains the configuration information of a disable action.
**/
public class DisableActionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public DisableActionConfiguration withNote(String note) {
        this.note = note;
        return this;
    }
}