package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteProvisionedProductPlanInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public DeleteProvisionedProductPlanInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IgnoreErrors")
    public Boolean ignoreErrors;
    public DeleteProvisionedProductPlanInput withIgnoreErrors(Boolean ignoreErrors) {
        this.ignoreErrors = ignoreErrors;
        return this;
    }
    @JsonProperty("PlanId")
    public String planId;
    public DeleteProvisionedProductPlanInput withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
}