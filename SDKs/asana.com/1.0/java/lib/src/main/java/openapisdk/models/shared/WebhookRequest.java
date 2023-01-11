package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public WebhookRequestFilters[] filters;
    public WebhookRequest withFilters(WebhookRequestFilters[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public WebhookRequest withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("target")
    public String target;
    public WebhookRequest withTarget(String target) {
        this.target = target;
        return this;
    }
}