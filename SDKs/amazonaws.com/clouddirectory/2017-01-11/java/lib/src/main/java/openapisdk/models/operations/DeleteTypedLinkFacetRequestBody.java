package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTypedLinkFacetRequestBody {
    @JsonProperty("Name")
    public String name;
    public DeleteTypedLinkFacetRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}