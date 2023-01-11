package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProfileObjectTypeTemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public ListProfileObjectTypeTemplateItem[] items;
    public ListProfileObjectTypeTemplatesResponse withItems(ListProfileObjectTypeTemplateItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListProfileObjectTypeTemplatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}