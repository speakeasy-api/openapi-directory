package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemDraftResponse
 * The type that defines the field for the createItemDraft response.
**/
public class ItemDraftResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemDraftId")
    public String itemDraftId;
    public ItemDraftResponse withItemDraftId(String itemDraftId) {
        this.itemDraftId = itemDraftId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellFlowNativeUri")
    public String sellFlowNativeUri;
    public ItemDraftResponse withSellFlowNativeUri(String sellFlowNativeUri) {
        this.sellFlowNativeUri = sellFlowNativeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellFlowUrl")
    public String sellFlowUrl;
    public ItemDraftResponse withSellFlowUrl(String sellFlowUrl) {
        this.sellFlowUrl = sellFlowUrl;
        return this;
    }
}