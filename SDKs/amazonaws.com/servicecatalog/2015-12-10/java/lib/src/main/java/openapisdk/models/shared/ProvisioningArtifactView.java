package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisioningArtifactView
 * An object that contains summary information about a product view and a provisioning artifact.
**/
public class ProvisioningArtifactView {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductViewSummary")
    public ProductViewSummary productViewSummary;
    public ProvisioningArtifactView withProductViewSummary(ProductViewSummary productViewSummary) {
        this.productViewSummary = productViewSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisioningArtifact")
    public ProvisioningArtifact provisioningArtifact;
    public ProvisioningArtifactView withProvisioningArtifact(ProvisioningArtifact provisioningArtifact) {
        this.provisioningArtifact = provisioningArtifact;
        return this;
    }
}