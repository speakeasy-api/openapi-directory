package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebhookFilterRule
 * The event criteria that specify when a webhook notification is sent to your URL.
**/
public class WebhookFilterRule {
    @JsonProperty("jsonPath")
    public String jsonPath;
    public WebhookFilterRule withJsonPath(String jsonPath) {
        this.jsonPath = jsonPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchEquals")
    public String matchEquals;
    public WebhookFilterRule withMatchEquals(String matchEquals) {
        this.matchEquals = matchEquals;
        return this;
    }
}