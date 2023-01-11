package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentsProgramOnboardingSteps
 * The payments program onboarding steps, status, and link.
**/
public class PaymentsProgramOnboardingSteps {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PaymentsProgramOnboardingSteps withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public PaymentsProgramOnboardingSteps withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webUrl")
    public String webUrl;
    public PaymentsProgramOnboardingSteps withWebUrl(String webUrl) {
        this.webUrl = webUrl;
        return this;
    }
}