package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDisassociateServiceActionFromProvisioningArtifactOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedServiceActionAssociations")
    public FailedServiceActionAssociation[] failedServiceActionAssociations;
    public BatchDisassociateServiceActionFromProvisioningArtifactOutput withFailedServiceActionAssociations(FailedServiceActionAssociation[] failedServiceActionAssociations) {
        this.failedServiceActionAssociations = failedServiceActionAssociations;
        return this;
    }
}