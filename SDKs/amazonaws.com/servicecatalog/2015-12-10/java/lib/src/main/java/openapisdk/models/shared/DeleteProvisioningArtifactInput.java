package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteProvisioningArtifactInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public DeleteProvisioningArtifactInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("ProductId")
    public String productId;
    public DeleteProvisioningArtifactInput withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonProperty("ProvisioningArtifactId")
    public String provisioningArtifactId;
    public DeleteProvisioningArtifactInput withProvisioningArtifactId(String provisioningArtifactId) {
        this.provisioningArtifactId = provisioningArtifactId;
        return this;
    }
}