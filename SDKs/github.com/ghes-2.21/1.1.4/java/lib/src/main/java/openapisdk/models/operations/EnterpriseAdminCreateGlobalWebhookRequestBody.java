package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminCreateGlobalWebhookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public EnterpriseAdminCreateGlobalWebhookRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("config")
    public EnterpriseAdminCreateGlobalWebhookRequestBodyConfig config;
    public EnterpriseAdminCreateGlobalWebhookRequestBody withConfig(EnterpriseAdminCreateGlobalWebhookRequestBodyConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public String[] events;
    public EnterpriseAdminCreateGlobalWebhookRequestBody withEvents(String[] events) {
        this.events = events;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public EnterpriseAdminCreateGlobalWebhookRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}