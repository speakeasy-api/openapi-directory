package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttachTypedLinkRequestBodyTypedLinkFacet
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
public class AttachTypedLinkRequestBodyTypedLinkFacet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaArn")
    public String schemaArn;
    public AttachTypedLinkRequestBodyTypedLinkFacet withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TypedLinkName")
    public String typedLinkName;
    public AttachTypedLinkRequestBodyTypedLinkFacet withTypedLinkName(String typedLinkName) {
        this.typedLinkName = typedLinkName;
        return this;
    }
}