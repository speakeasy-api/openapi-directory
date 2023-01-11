package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchCreateIndex
 * Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchCreateIndex {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchReferenceName")
    public String batchReferenceName;
    public BatchCreateIndex withBatchReferenceName(String batchReferenceName) {
        this.batchReferenceName = batchReferenceName;
        return this;
    }
    @JsonProperty("IsUnique")
    public Boolean isUnique;
    public BatchCreateIndex withIsUnique(Boolean isUnique) {
        this.isUnique = isUnique;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LinkName")
    public String linkName;
    public BatchCreateIndex withLinkName(String linkName) {
        this.linkName = linkName;
        return this;
    }
    @JsonProperty("OrderedIndexedAttributeList")
    public AttributeKey[] orderedIndexedAttributeList;
    public BatchCreateIndex withOrderedIndexedAttributeList(AttributeKey[] orderedIndexedAttributeList) {
        this.orderedIndexedAttributeList = orderedIndexedAttributeList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParentReference")
    public ObjectReference parentReference;
    public BatchCreateIndex withParentReference(ObjectReference parentReference) {
        this.parentReference = parentReference;
        return this;
    }
}