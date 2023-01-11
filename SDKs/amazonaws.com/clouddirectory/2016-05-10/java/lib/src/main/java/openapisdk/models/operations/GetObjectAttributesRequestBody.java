package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetObjectAttributesRequestBody {
    @JsonProperty("AttributeNames")
    public String[] attributeNames;
    public GetObjectAttributesRequestBody withAttributeNames(String[] attributeNames) {
        this.attributeNames = attributeNames;
        return this;
    }
    @JsonProperty("ObjectReference")
    public GetObjectAttributesRequestBodyObjectReference objectReference;
    public GetObjectAttributesRequestBody withObjectReference(GetObjectAttributesRequestBodyObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
    @JsonProperty("SchemaFacet")
    public GetObjectAttributesRequestBodySchemaFacet schemaFacet;
    public GetObjectAttributesRequestBody withSchemaFacet(GetObjectAttributesRequestBodySchemaFacet schemaFacet) {
        this.schemaFacet = schemaFacet;
        return this;
    }
}