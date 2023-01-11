package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTypedLinkFacetInformationRequestBody {
    @JsonProperty("Name")
    public String name;
    public GetTypedLinkFacetInformationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}