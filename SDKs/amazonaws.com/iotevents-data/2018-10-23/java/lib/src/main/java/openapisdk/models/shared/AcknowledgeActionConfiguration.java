package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AcknowledgeActionConfiguration
 * Contains the configuration information of an acknowledge action.
**/
public class AcknowledgeActionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public AcknowledgeActionConfiguration withNote(String note) {
        this.note = note;
        return this;
    }
}