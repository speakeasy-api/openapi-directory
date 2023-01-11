package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Meta
 * Response metadata
**/
public class Meta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cursors")
    public MetaCursors cursors;
    public Meta withCursors(MetaCursors cursors) {
        this.cursors = cursors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items_on_page")
    public Long itemsOnPage;
    public Meta withItemsOnPage(Long itemsOnPage) {
        this.itemsOnPage = itemsOnPage;
        return this;
    }
}