package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebhookResponseFilters
 * A set of filters to specify a whitelist for what types of events will be delivered.
**/
public class WebhookResponseFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public WebhookResponseFilters withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String[] fields;
    public WebhookResponseFilters withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_subtype")
    public String resourceSubtype;
    public WebhookResponseFilters withResourceSubtype(String resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public WebhookResponseFilters withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}