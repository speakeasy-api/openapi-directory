package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPipelinesInput
 * Contains the parameters for ListPipelines.
**/
public class ListPipelinesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marker")
    public String marker;
    public ListPipelinesInput withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}