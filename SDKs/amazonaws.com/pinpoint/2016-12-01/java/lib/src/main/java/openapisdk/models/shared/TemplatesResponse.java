package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplatesResponse
 * Provides information about all the message templates that are associated with your Amazon Pinpoint account.
**/
public class TemplatesResponse {
    @JsonProperty("Item")
    public TemplateResponse[] item;
    public TemplatesResponse withItem(TemplateResponse[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public TemplatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}