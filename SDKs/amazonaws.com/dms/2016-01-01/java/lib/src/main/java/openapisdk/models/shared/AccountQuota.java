package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountQuota
 * Describes a quota for an Amazon Web Services account, for example the number of replication instances allowed.
**/
public class AccountQuota {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountQuotaName")
    public String accountQuotaName;
    public AccountQuota withAccountQuotaName(String accountQuotaName) {
        this.accountQuotaName = accountQuotaName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Max")
    public Long max;
    public AccountQuota withMax(Long max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Used")
    public Long used;
    public AccountQuota withUsed(Long used) {
        this.used = used;
        return this;
    }
}