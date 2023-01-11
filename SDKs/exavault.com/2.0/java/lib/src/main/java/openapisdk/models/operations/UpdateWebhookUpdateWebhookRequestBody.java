package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWebhookUpdateWebhookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointUrl")
    public String endpointUrl;
    public UpdateWebhookUpdateWebhookRequestBody withEndpointUrl(String endpointUrl) {
        this.endpointUrl = endpointUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public UpdateWebhookUpdateWebhookRequestBody withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseVersion")
    public UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum responseVersion;
    public UpdateWebhookUpdateWebhookRequestBody withResponseVersion(UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum responseVersion) {
        this.responseVersion = responseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggers")
    public openapisdk.models.shared.WebhookTriggers triggers;
    public UpdateWebhookUpdateWebhookRequestBody withTriggers(openapisdk.models.shared.WebhookTriggers triggers) {
        this.triggers = triggers;
        return this;
    }
}