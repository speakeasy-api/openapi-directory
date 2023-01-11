package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchWriteOperation
 * Represents the output of a <code>BatchWrite</code> operation. 
**/
public class BatchWriteOperation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddFacetToObject")
    public BatchAddFacetToObject addFacetToObject;
    public BatchWriteOperation withAddFacetToObject(BatchAddFacetToObject addFacetToObject) {
        this.addFacetToObject = addFacetToObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachObject")
    public BatchAttachObject attachObject;
    public BatchWriteOperation withAttachObject(BatchAttachObject attachObject) {
        this.attachObject = attachObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachPolicy")
    public BatchAttachPolicy attachPolicy;
    public BatchWriteOperation withAttachPolicy(BatchAttachPolicy attachPolicy) {
        this.attachPolicy = attachPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachToIndex")
    public BatchAttachToIndex attachToIndex;
    public BatchWriteOperation withAttachToIndex(BatchAttachToIndex attachToIndex) {
        this.attachToIndex = attachToIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachTypedLink")
    public BatchAttachTypedLink attachTypedLink;
    public BatchWriteOperation withAttachTypedLink(BatchAttachTypedLink attachTypedLink) {
        this.attachTypedLink = attachTypedLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreateIndex")
    public BatchCreateIndex createIndex;
    public BatchWriteOperation withCreateIndex(BatchCreateIndex createIndex) {
        this.createIndex = createIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreateObject")
    public BatchCreateObject createObject;
    public BatchWriteOperation withCreateObject(BatchCreateObject createObject) {
        this.createObject = createObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteObject")
    public BatchDeleteObject deleteObject;
    public BatchWriteOperation withDeleteObject(BatchDeleteObject deleteObject) {
        this.deleteObject = deleteObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetachFromIndex")
    public BatchDetachFromIndex detachFromIndex;
    public BatchWriteOperation withDetachFromIndex(BatchDetachFromIndex detachFromIndex) {
        this.detachFromIndex = detachFromIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetachObject")
    public BatchDetachObject detachObject;
    public BatchWriteOperation withDetachObject(BatchDetachObject detachObject) {
        this.detachObject = detachObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetachPolicy")
    public BatchDetachPolicy detachPolicy;
    public BatchWriteOperation withDetachPolicy(BatchDetachPolicy detachPolicy) {
        this.detachPolicy = detachPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetachTypedLink")
    public BatchDetachTypedLink detachTypedLink;
    public BatchWriteOperation withDetachTypedLink(BatchDetachTypedLink detachTypedLink) {
        this.detachTypedLink = detachTypedLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoveFacetFromObject")
    public BatchRemoveFacetFromObject removeFacetFromObject;
    public BatchWriteOperation withRemoveFacetFromObject(BatchRemoveFacetFromObject removeFacetFromObject) {
        this.removeFacetFromObject = removeFacetFromObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateLinkAttributes")
    public BatchUpdateLinkAttributes updateLinkAttributes;
    public BatchWriteOperation withUpdateLinkAttributes(BatchUpdateLinkAttributes updateLinkAttributes) {
        this.updateLinkAttributes = updateLinkAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateObjectAttributes")
    public BatchUpdateObjectAttributes updateObjectAttributes;
    public BatchWriteOperation withUpdateObjectAttributes(BatchUpdateObjectAttributes updateObjectAttributes) {
        this.updateObjectAttributes = updateObjectAttributes;
        return this;
    }
}