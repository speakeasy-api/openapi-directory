package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddFacetToObjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectAttributeList")
    public openapisdk.models.shared.AttributeKeyAndValue[] objectAttributeList;
    public AddFacetToObjectRequestBody withObjectAttributeList(openapisdk.models.shared.AttributeKeyAndValue[] objectAttributeList) {
        this.objectAttributeList = objectAttributeList;
        return this;
    }
    @JsonProperty("ObjectReference")
    public AddFacetToObjectRequestBodyObjectReference objectReference;
    public AddFacetToObjectRequestBody withObjectReference(AddFacetToObjectRequestBodyObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
    @JsonProperty("SchemaFacet")
    public AddFacetToObjectRequestBodySchemaFacet schemaFacet;
    public AddFacetToObjectRequestBody withSchemaFacet(AddFacetToObjectRequestBodySchemaFacet schemaFacet) {
        this.schemaFacet = schemaFacet;
        return this;
    }
}