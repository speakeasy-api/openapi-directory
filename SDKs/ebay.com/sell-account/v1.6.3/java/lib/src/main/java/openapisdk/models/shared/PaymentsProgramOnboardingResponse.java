package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentsProgramOnboardingResponse
 * Contains the payments program onboarding response
**/
public class PaymentsProgramOnboardingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onboardingStatus")
    public String onboardingStatus;
    public PaymentsProgramOnboardingResponse withOnboardingStatus(String onboardingStatus) {
        this.onboardingStatus = onboardingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public PaymentsProgramOnboardingSteps[] steps;
    public PaymentsProgramOnboardingResponse withSteps(PaymentsProgramOnboardingSteps[] steps) {
        this.steps = steps;
        return this;
    }
}