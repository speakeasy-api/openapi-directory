package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateObjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LinkName")
    public String linkName;
    public CreateObjectRequestBody withLinkName(String linkName) {
        this.linkName = linkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectAttributeList")
    public openapisdk.models.shared.AttributeKeyAndValue[] objectAttributeList;
    public CreateObjectRequestBody withObjectAttributeList(openapisdk.models.shared.AttributeKeyAndValue[] objectAttributeList) {
        this.objectAttributeList = objectAttributeList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParentReference")
    public CreateObjectRequestBodyParentReference parentReference;
    public CreateObjectRequestBody withParentReference(CreateObjectRequestBodyParentReference parentReference) {
        this.parentReference = parentReference;
        return this;
    }
    @JsonProperty("SchemaFacets")
    public openapisdk.models.shared.SchemaFacet[] schemaFacets;
    public CreateObjectRequestBody withSchemaFacets(openapisdk.models.shared.SchemaFacet[] schemaFacets) {
        this.schemaFacets = schemaFacets;
        return this;
    }
}