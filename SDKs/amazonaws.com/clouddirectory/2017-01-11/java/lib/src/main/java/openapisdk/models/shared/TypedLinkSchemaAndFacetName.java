package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TypedLinkSchemaAndFacetName
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
public class TypedLinkSchemaAndFacetName {
    @JsonProperty("SchemaArn")
    public String schemaArn;
    public TypedLinkSchemaAndFacetName withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
    @JsonProperty("TypedLinkName")
    public String typedLinkName;
    public TypedLinkSchemaAndFacetName withTypedLinkName(String typedLinkName) {
        this.typedLinkName = typedLinkName;
        return this;
    }
}