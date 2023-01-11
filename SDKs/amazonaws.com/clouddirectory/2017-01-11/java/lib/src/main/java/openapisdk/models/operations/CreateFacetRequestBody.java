package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFacetRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public openapisdk.models.shared.FacetAttribute[] attributes;
    public CreateFacetRequestBody withAttributes(openapisdk.models.shared.FacetAttribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FacetStyle")
    public CreateFacetRequestBodyFacetStyleEnum facetStyle;
    public CreateFacetRequestBody withFacetStyle(CreateFacetRequestBodyFacetStyleEnum facetStyle) {
        this.facetStyle = facetStyle;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateFacetRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectType")
    public CreateFacetRequestBodyObjectTypeEnum objectType;
    public CreateFacetRequestBody withObjectType(CreateFacetRequestBodyObjectTypeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
}