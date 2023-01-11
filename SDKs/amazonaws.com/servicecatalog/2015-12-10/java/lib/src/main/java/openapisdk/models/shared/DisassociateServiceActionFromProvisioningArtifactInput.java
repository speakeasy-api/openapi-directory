package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateServiceActionFromProvisioningArtifactInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public DisassociateServiceActionFromProvisioningArtifactInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("ProductId")
    public String productId;
    public DisassociateServiceActionFromProvisioningArtifactInput withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonProperty("ProvisioningArtifactId")
    public String provisioningArtifactId;
    public DisassociateServiceActionFromProvisioningArtifactInput withProvisioningArtifactId(String provisioningArtifactId) {
        this.provisioningArtifactId = provisioningArtifactId;
        return this;
    }
    @JsonProperty("ServiceActionId")
    public String serviceActionId;
    public DisassociateServiceActionFromProvisioningArtifactInput withServiceActionId(String serviceActionId) {
        this.serviceActionId = serviceActionId;
        return this;
    }
}