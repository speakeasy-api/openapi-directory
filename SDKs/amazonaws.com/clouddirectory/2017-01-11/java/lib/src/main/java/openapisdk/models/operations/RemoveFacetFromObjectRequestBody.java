package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveFacetFromObjectRequestBody {
    @JsonProperty("ObjectReference")
    public RemoveFacetFromObjectRequestBodyObjectReference objectReference;
    public RemoveFacetFromObjectRequestBody withObjectReference(RemoveFacetFromObjectRequestBodyObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
    @JsonProperty("SchemaFacet")
    public RemoveFacetFromObjectRequestBodySchemaFacet schemaFacet;
    public RemoveFacetFromObjectRequestBody withSchemaFacet(RemoveFacetFromObjectRequestBodySchemaFacet schemaFacet) {
        this.schemaFacet = schemaFacet;
        return this;
    }
}