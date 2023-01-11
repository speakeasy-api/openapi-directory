package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DomainSummary
 * Summary information about one domain.
**/
public class DomainSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoRenew")
    public Boolean autoRenew;
    public DomainSummary withAutoRenew(Boolean autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public DomainSummary withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Expiry")
    public OffsetDateTime expiry;
    public DomainSummary withExpiry(OffsetDateTime expiry) {
        this.expiry = expiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransferLock")
    public Boolean transferLock;
    public DomainSummary withTransferLock(Boolean transferLock) {
        this.transferLock = transferLock;
        return this;
    }
}