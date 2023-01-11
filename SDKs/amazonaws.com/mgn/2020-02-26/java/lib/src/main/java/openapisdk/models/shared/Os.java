package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Os
 * Operating System.
**/
public class Os {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullString")
    public String fullString;
    public Os withFullString(String fullString) {
        this.fullString = fullString;
        return this;
    }
}