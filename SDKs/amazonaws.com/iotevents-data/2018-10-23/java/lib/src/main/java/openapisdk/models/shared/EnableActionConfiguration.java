package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnableActionConfiguration
 * Contains the configuration information of an enable action.
**/
public class EnableActionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public EnableActionConfiguration withNote(String note) {
        this.note = note;
        return this;
    }
}