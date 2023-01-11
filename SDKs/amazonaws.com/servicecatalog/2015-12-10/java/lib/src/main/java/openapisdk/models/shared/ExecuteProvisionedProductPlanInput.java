package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExecuteProvisionedProductPlanInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public ExecuteProvisionedProductPlanInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;
    public ExecuteProvisionedProductPlanInput withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
    @JsonProperty("PlanId")
    public String planId;
    public ExecuteProvisionedProductPlanInput withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
}