package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportAsProvisionedProductInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public ImportAsProvisionedProductInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;
    public ImportAsProvisionedProductInput withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
    @JsonProperty("PhysicalId")
    public String physicalId;
    public ImportAsProvisionedProductInput withPhysicalId(String physicalId) {
        this.physicalId = physicalId;
        return this;
    }
    @JsonProperty("ProductId")
    public String productId;
    public ImportAsProvisionedProductInput withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonProperty("ProvisionedProductName")
    public String provisionedProductName;
    public ImportAsProvisionedProductInput withProvisionedProductName(String provisionedProductName) {
        this.provisionedProductName = provisionedProductName;
        return this;
    }
    @JsonProperty("ProvisioningArtifactId")
    public String provisioningArtifactId;
    public ImportAsProvisionedProductInput withProvisioningArtifactId(String provisioningArtifactId) {
        this.provisioningArtifactId = provisioningArtifactId;
        return this;
    }
}