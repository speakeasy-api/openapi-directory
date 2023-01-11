package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailedServiceActionAssociation
 * An object containing information about the error, along with identifying information about the self-service action and its associations.
**/
public class FailedServiceActionAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public ServiceActionAssociationErrorCodeEnum errorCode;
    public FailedServiceActionAssociation withErrorCode(ServiceActionAssociationErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public FailedServiceActionAssociation withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductId")
    public String productId;
    public FailedServiceActionAssociation withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisioningArtifactId")
    public String provisioningArtifactId;
    public FailedServiceActionAssociation withProvisioningArtifactId(String provisioningArtifactId) {
        this.provisioningArtifactId = provisioningArtifactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceActionId")
    public String serviceActionId;
    public FailedServiceActionAssociation withServiceActionId(String serviceActionId) {
        this.serviceActionId = serviceActionId;
        return this;
    }
}