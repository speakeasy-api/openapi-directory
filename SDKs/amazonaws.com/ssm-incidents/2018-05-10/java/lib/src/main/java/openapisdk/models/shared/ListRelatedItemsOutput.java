package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRelatedItemsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRelatedItemsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("relatedItems")
    public RelatedItem[] relatedItems;
    public ListRelatedItemsOutput withRelatedItems(RelatedItem[] relatedItems) {
        this.relatedItems = relatedItems;
        return this;
    }
}