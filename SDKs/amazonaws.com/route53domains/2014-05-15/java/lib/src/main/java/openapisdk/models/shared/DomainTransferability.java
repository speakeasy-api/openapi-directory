package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainTransferability
 * A complex type that contains information about whether the specified domain can be transferred to Route 53.
**/
public class DomainTransferability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Transferable")
    public TransferableEnum transferable;
    public DomainTransferability withTransferable(TransferableEnum transferable) {
        this.transferable = transferable;
        return this;
    }
}