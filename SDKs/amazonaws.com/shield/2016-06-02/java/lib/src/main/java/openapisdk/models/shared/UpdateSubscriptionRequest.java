package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSubscriptionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoRenew")
    public AutoRenewEnum autoRenew;
    public UpdateSubscriptionRequest withAutoRenew(AutoRenewEnum autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
}