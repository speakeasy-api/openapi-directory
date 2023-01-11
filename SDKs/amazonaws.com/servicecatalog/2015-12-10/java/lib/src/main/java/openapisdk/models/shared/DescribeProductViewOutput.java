package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeProductViewOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductViewSummary")
    public ProductViewSummary productViewSummary;
    public DescribeProductViewOutput withProductViewSummary(ProductViewSummary productViewSummary) {
        this.productViewSummary = productViewSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisioningArtifacts")
    public ProvisioningArtifact[] provisioningArtifacts;
    public DescribeProductViewOutput withProvisioningArtifacts(ProvisioningArtifact[] provisioningArtifacts) {
        this.provisioningArtifacts = provisioningArtifacts;
        return this;
    }
}