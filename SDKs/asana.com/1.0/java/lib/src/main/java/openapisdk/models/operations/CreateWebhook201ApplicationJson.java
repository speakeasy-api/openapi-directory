package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWebhook201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.WebhookResponse data;
    public CreateWebhook201ApplicationJson withData(openapisdk.models.shared.WebhookResponse data) {
        this.data = data;
        return this;
    }
}