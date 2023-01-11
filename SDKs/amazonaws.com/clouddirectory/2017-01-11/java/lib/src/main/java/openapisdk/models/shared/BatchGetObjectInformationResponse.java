package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetObjectInformationResponse
 * Represents the output of a <a>GetObjectInformation</a> response operation.
**/
public class BatchGetObjectInformationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectIdentifier")
    public String objectIdentifier;
    public BatchGetObjectInformationResponse withObjectIdentifier(String objectIdentifier) {
        this.objectIdentifier = objectIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaFacets")
    public SchemaFacet[] schemaFacets;
    public BatchGetObjectInformationResponse withSchemaFacets(SchemaFacet[] schemaFacets) {
        this.schemaFacets = schemaFacets;
        return this;
    }
}