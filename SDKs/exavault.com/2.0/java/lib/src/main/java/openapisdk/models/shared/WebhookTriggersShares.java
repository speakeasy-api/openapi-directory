package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookTriggersShares {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formSubmit")
    public Boolean formSubmit;
    public WebhookTriggersShares withFormSubmit(Boolean formSubmit) {
        this.formSubmit = formSubmit;
        return this;
    }
}