package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchCreateObject
 * Represents the output of a <a>CreateObject</a> operation.
**/
public class BatchCreateObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchReferenceName")
    public String batchReferenceName;
    public BatchCreateObject withBatchReferenceName(String batchReferenceName) {
        this.batchReferenceName = batchReferenceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LinkName")
    public String linkName;
    public BatchCreateObject withLinkName(String linkName) {
        this.linkName = linkName;
        return this;
    }
    @JsonProperty("ObjectAttributeList")
    public AttributeKeyAndValue[] objectAttributeList;
    public BatchCreateObject withObjectAttributeList(AttributeKeyAndValue[] objectAttributeList) {
        this.objectAttributeList = objectAttributeList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParentReference")
    public ObjectReference parentReference;
    public BatchCreateObject withParentReference(ObjectReference parentReference) {
        this.parentReference = parentReference;
        return this;
    }
    @JsonProperty("SchemaFacet")
    public SchemaFacet[] schemaFacet;
    public BatchCreateObject withSchemaFacet(SchemaFacet[] schemaFacet) {
        this.schemaFacet = schemaFacet;
        return this;
    }
}