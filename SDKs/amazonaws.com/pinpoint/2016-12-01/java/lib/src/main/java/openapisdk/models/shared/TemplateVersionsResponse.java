package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateVersionsResponse
 * Provides information about all the versions of a specific message template.
**/
public class TemplateVersionsResponse {
    @JsonProperty("Item")
    public TemplateVersionResponse[] item;
    public TemplateVersionsResponse withItem(TemplateVersionResponse[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public TemplateVersionsResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public TemplateVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestID")
    public String requestID;
    public TemplateVersionsResponse withRequestId(String requestID) {
        this.requestID = requestID;
        return this;
    }
}