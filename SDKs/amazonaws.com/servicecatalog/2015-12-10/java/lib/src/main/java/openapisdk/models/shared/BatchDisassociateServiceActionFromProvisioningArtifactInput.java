package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDisassociateServiceActionFromProvisioningArtifactInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public BatchDisassociateServiceActionFromProvisioningArtifactInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("ServiceActionAssociations")
    public ServiceActionAssociation[] serviceActionAssociations;
    public BatchDisassociateServiceActionFromProvisioningArtifactInput withServiceActionAssociations(ServiceActionAssociation[] serviceActionAssociations) {
        this.serviceActionAssociations = serviceActionAssociations;
        return this;
    }
}