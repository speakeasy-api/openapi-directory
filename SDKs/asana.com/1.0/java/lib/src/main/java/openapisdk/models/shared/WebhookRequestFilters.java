package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebhookRequestFilters
 * A set of filters to specify a whitelist for what types of events will be delivered.
**/
public class WebhookRequestFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public WebhookRequestFilters withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String[] fields;
    public WebhookRequestFilters withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_subtype")
    public String resourceSubtype;
    public WebhookRequestFilters withResourceSubtype(String resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public WebhookRequestFilters withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}