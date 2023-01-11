package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteTrailRequest
 * The request that specifies the name of a trail to delete.
**/
public class DeleteTrailRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteTrailRequest withName(String name) {
        this.name = name;
        return this;
    }
}