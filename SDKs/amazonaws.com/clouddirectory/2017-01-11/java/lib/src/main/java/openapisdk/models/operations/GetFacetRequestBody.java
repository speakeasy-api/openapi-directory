package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFacetRequestBody {
    @JsonProperty("Name")
    public String name;
    public GetFacetRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}