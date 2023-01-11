package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProvisionedProductPlanOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlanId")
    public String planId;
    public CreateProvisionedProductPlanOutput withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlanName")
    public String planName;
    public CreateProvisionedProductPlanOutput withPlanName(String planName) {
        this.planName = planName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionProductId")
    public String provisionProductId;
    public CreateProvisionedProductPlanOutput withProvisionProductId(String provisionProductId) {
        this.provisionProductId = provisionProductId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedProductName")
    public String provisionedProductName;
    public CreateProvisionedProductPlanOutput withProvisionedProductName(String provisionedProductName) {
        this.provisionedProductName = provisionedProductName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisioningArtifactId")
    public String provisioningArtifactId;
    public CreateProvisionedProductPlanOutput withProvisioningArtifactId(String provisioningArtifactId) {
        this.provisioningArtifactId = provisioningArtifactId;
        return this;
    }
}