package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndpointList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endPoints")
    public String[] endPoints;
    public EndpointList withEndPoints(String[] endPoints) {
        this.endPoints = endPoints;
        return this;
    }
}