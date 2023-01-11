package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IndexAttachment
 * Represents an index and an attached object.
**/
public class IndexAttachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndexedAttributes")
    public AttributeKeyAndValue[] indexedAttributes;
    public IndexAttachment withIndexedAttributes(AttributeKeyAndValue[] indexedAttributes) {
        this.indexedAttributes = indexedAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectIdentifier")
    public String objectIdentifier;
    public IndexAttachment withObjectIdentifier(String objectIdentifier) {
        this.objectIdentifier = objectIdentifier;
        return this;
    }
}