package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteFacesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeletedFaces")
    public String[] deletedFaces;
    public DeleteFacesResponse withDeletedFaces(String[] deletedFaces) {
        this.deletedFaces = deletedFaces;
        return this;
    }
}