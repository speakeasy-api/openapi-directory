package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchUpdateLinkAttributes
 * Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchUpdateLinkAttributes {
    @JsonProperty("AttributeUpdates")
    public LinkAttributeUpdate[] attributeUpdates;
    public BatchUpdateLinkAttributes withAttributeUpdates(LinkAttributeUpdate[] attributeUpdates) {
        this.attributeUpdates = attributeUpdates;
        return this;
    }
    @JsonProperty("TypedLinkSpecifier")
    public TypedLinkSpecifier typedLinkSpecifier;
    public BatchUpdateLinkAttributes withTypedLinkSpecifier(TypedLinkSpecifier typedLinkSpecifier) {
        this.typedLinkSpecifier = typedLinkSpecifier;
        return this;
    }
}