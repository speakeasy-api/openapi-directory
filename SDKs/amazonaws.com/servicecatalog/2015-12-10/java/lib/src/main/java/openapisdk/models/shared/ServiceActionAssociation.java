package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ServiceActionAssociation
 * A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
**/
public class ServiceActionAssociation {
    @JsonProperty("ProductId")
    public String productId;
    public ServiceActionAssociation withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonProperty("ProvisioningArtifactId")
    public String provisioningArtifactId;
    public ServiceActionAssociation withProvisioningArtifactId(String provisioningArtifactId) {
        this.provisioningArtifactId = provisioningArtifactId;
        return this;
    }
    @JsonProperty("ServiceActionId")
    public String serviceActionId;
    public ServiceActionAssociation withServiceActionId(String serviceActionId) {
        this.serviceActionId = serviceActionId;
        return this;
    }
}