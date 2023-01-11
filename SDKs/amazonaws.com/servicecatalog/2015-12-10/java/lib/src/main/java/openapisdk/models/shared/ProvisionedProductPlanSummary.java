package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisionedProductPlanSummary
 * Summary information about a plan.
**/
public class ProvisionedProductPlanSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlanId")
    public String planId;
    public ProvisionedProductPlanSummary withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlanName")
    public String planName;
    public ProvisionedProductPlanSummary withPlanName(String planName) {
        this.planName = planName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlanType")
    public ProvisionedProductPlanTypeEnum planType;
    public ProvisionedProductPlanSummary withPlanType(ProvisionedProductPlanTypeEnum planType) {
        this.planType = planType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionProductId")
    public String provisionProductId;
    public ProvisionedProductPlanSummary withProvisionProductId(String provisionProductId) {
        this.provisionProductId = provisionProductId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionProductName")
    public String provisionProductName;
    public ProvisionedProductPlanSummary withProvisionProductName(String provisionProductName) {
        this.provisionProductName = provisionProductName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisioningArtifactId")
    public String provisioningArtifactId;
    public ProvisionedProductPlanSummary withProvisioningArtifactId(String provisioningArtifactId) {
        this.provisioningArtifactId = provisioningArtifactId;
        return this;
    }
}