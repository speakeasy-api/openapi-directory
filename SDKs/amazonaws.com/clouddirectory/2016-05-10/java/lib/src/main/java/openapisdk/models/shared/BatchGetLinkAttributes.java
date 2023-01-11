package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetLinkAttributes
 * Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchGetLinkAttributes {
    @JsonProperty("AttributeNames")
    public String[] attributeNames;
    public BatchGetLinkAttributes withAttributeNames(String[] attributeNames) {
        this.attributeNames = attributeNames;
        return this;
    }
    @JsonProperty("TypedLinkSpecifier")
    public TypedLinkSpecifier typedLinkSpecifier;
    public BatchGetLinkAttributes withTypedLinkSpecifier(TypedLinkSpecifier typedLinkSpecifier) {
        this.typedLinkSpecifier = typedLinkSpecifier;
        return this;
    }
}