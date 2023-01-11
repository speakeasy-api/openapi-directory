package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchAssociateServiceActionWithProvisioningArtifactOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedServiceActionAssociations")
    public FailedServiceActionAssociation[] failedServiceActionAssociations;
    public BatchAssociateServiceActionWithProvisioningArtifactOutput withFailedServiceActionAssociations(FailedServiceActionAssociation[] failedServiceActionAssociations) {
        this.failedServiceActionAssociations = failedServiceActionAssociations;
        return this;
    }
}