package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFacetRequestBody {
    @JsonProperty("Name")
    public String name;
    public DeleteFacetRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}