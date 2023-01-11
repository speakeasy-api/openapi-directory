package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddFacetToObjectRequestBodySchemaFacet
 * A facet.
**/
public class AddFacetToObjectRequestBodySchemaFacet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FacetName")
    public String facetName;
    public AddFacetToObjectRequestBodySchemaFacet withFacetName(String facetName) {
        this.facetName = facetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaArn")
    public String schemaArn;
    public AddFacetToObjectRequestBodySchemaFacet withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
}