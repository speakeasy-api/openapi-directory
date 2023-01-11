package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetObjectInformationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectIdentifier")
    public String objectIdentifier;
    public GetObjectInformationResponse withObjectIdentifier(String objectIdentifier) {
        this.objectIdentifier = objectIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaFacets")
    public SchemaFacet[] schemaFacets;
    public GetObjectInformationResponse withSchemaFacets(SchemaFacet[] schemaFacets) {
        this.schemaFacets = schemaFacets;
        return this;
    }
}