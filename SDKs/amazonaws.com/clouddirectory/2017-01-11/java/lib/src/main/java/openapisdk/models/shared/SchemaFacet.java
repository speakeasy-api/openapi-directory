package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchemaFacet
 * A facet.
**/
public class SchemaFacet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FacetName")
    public String facetName;
    public SchemaFacet withFacetName(String facetName) {
        this.facetName = facetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaArn")
    public String schemaArn;
    public SchemaFacet withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
}