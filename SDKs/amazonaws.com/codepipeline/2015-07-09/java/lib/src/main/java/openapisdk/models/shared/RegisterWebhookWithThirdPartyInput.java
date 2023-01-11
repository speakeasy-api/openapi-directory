package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterWebhookWithThirdPartyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookName")
    public String webhookName;
    public RegisterWebhookWithThirdPartyInput withWebhookName(String webhookName) {
        this.webhookName = webhookName;
        return this;
    }
}