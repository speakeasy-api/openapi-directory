package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebhookActivityResponse
 * Session activity list response
**/
public class WebhookActivityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public WebhookActivityEntry[] data;
    public WebhookActivityResponse withData(WebhookActivityEntry[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public Long responseStatus;
    public WebhookActivityResponse withResponseStatus(Long responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnedResults")
    public Long returnedResults;
    public WebhookActivityResponse withReturnedResults(Long returnedResults) {
        this.returnedResults = returnedResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Long totalResults;
    public WebhookActivityResponse withTotalResults(Long totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}