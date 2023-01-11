package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CheckDomainTransferabilityResponse
 * The CheckDomainTransferability response includes the following elements.
**/
public class CheckDomainTransferabilityResponse {
    @JsonProperty("Transferability")
    public DomainTransferability transferability;
    public CheckDomainTransferabilityResponse withTransferability(DomainTransferability transferability) {
        this.transferability = transferability;
        return this;
    }
}