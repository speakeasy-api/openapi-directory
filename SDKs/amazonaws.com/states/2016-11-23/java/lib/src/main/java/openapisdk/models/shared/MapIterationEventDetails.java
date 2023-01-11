package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MapIterationEventDetails
 * Contains details about an iteration of a Map state.
**/
public class MapIterationEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Long index;
    public MapIterationEventDetails withIndex(Long index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MapIterationEventDetails withName(String name) {
        this.name = name;
        return this;
    }
}