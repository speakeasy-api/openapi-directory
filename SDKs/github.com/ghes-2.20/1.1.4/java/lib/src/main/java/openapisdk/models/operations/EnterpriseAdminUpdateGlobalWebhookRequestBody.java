package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminUpdateGlobalWebhookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public EnterpriseAdminUpdateGlobalWebhookRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig config;
    public EnterpriseAdminUpdateGlobalWebhookRequestBody withConfig(EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public String[] events;
    public EnterpriseAdminUpdateGlobalWebhookRequestBody withEvents(String[] events) {
        this.events = events;
        return this;
    }
}