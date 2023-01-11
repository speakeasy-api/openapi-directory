package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveFacetFromObjectRequestBodySchemaFacet
 * A facet.
**/
public class RemoveFacetFromObjectRequestBodySchemaFacet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FacetName")
    public String facetName;
    public RemoveFacetFromObjectRequestBodySchemaFacet withFacetName(String facetName) {
        this.facetName = facetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaArn")
    public String schemaArn;
    public RemoveFacetFromObjectRequestBodySchemaFacet withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
}