package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkAttributeUpdate
 * Structure that contains attribute update information.
**/
public class LinkAttributeUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeAction")
    public LinkAttributeAction attributeAction;
    public LinkAttributeUpdate withAttributeAction(LinkAttributeAction attributeAction) {
        this.attributeAction = attributeAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeKey")
    public AttributeKey attributeKey;
    public LinkAttributeUpdate withAttributeKey(AttributeKey attributeKey) {
        this.attributeKey = attributeKey;
        return this;
    }
}