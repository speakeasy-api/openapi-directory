package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateRelatedItemsRequestBodyRelatedItemsUpdate
 * Details about the related item you're adding.
**/
public class UpdateRelatedItemsRequestBodyRelatedItemsUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemToAdd")
    public openapisdk.models.shared.RelatedItem itemToAdd;
    public UpdateRelatedItemsRequestBodyRelatedItemsUpdate withItemToAdd(openapisdk.models.shared.RelatedItem itemToAdd) {
        this.itemToAdd = itemToAdd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemToRemove")
    public openapisdk.models.shared.ItemIdentifier itemToRemove;
    public UpdateRelatedItemsRequestBodyRelatedItemsUpdate withItemToRemove(openapisdk.models.shared.ItemIdentifier itemToRemove) {
        this.itemToRemove = itemToRemove;
        return this;
    }
}