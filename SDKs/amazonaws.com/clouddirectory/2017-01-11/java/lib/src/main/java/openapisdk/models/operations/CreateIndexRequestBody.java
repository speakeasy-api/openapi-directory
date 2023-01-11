package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateIndexRequestBody {
    @JsonProperty("IsUnique")
    public Boolean isUnique;
    public CreateIndexRequestBody withIsUnique(Boolean isUnique) {
        this.isUnique = isUnique;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LinkName")
    public String linkName;
    public CreateIndexRequestBody withLinkName(String linkName) {
        this.linkName = linkName;
        return this;
    }
    @JsonProperty("OrderedIndexedAttributeList")
    public openapisdk.models.shared.AttributeKey[] orderedIndexedAttributeList;
    public CreateIndexRequestBody withOrderedIndexedAttributeList(openapisdk.models.shared.AttributeKey[] orderedIndexedAttributeList) {
        this.orderedIndexedAttributeList = orderedIndexedAttributeList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParentReference")
    public CreateIndexRequestBodyParentReference parentReference;
    public CreateIndexRequestBody withParentReference(CreateIndexRequestBodyParentReference parentReference) {
        this.parentReference = parentReference;
        return this;
    }
}