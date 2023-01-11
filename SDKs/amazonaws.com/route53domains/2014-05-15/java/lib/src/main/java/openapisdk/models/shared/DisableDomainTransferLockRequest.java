package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DisableDomainTransferLockRequest
 * The DisableDomainTransferLock request includes the following element.
**/
public class DisableDomainTransferLockRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public DisableDomainTransferLockRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}