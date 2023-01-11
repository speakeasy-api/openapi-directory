package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWebhookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook")
    public CreateWebhookRequestBodyWebhook webhook;
    public CreateWebhookRequestBody withWebhook(CreateWebhookRequestBodyWebhook webhook) {
        this.webhook = webhook;
        return this;
    }
}