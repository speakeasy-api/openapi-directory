package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddWebhookAddWebhookRequestBody {
    @JsonProperty("endpointUrl")
    public String endpointUrl;
    public AddWebhookAddWebhookRequestBody withEndpointUrl(String endpointUrl) {
        this.endpointUrl = endpointUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public AddWebhookAddWebhookRequestBody withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseVersion")
    public AddWebhookAddWebhookRequestBodyResponseVersionEnum responseVersion;
    public AddWebhookAddWebhookRequestBody withResponseVersion(AddWebhookAddWebhookRequestBodyResponseVersionEnum responseVersion) {
        this.responseVersion = responseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggers")
    public openapisdk.models.shared.WebhookTriggers triggers;
    public AddWebhookAddWebhookRequestBody withTriggers(openapisdk.models.shared.WebhookTriggers triggers) {
        this.triggers = triggers;
        return this;
    }
}