package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MapStateStartedEventDetails
 * Details about a Map state that was started.
**/
public class MapStateStartedEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public MapStateStartedEventDetails withLength(Long length) {
        this.length = length;
        return this;
    }
}