package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingDetails
 * An object that describes workflow billing details.
**/
public class BillingDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billedDurationInMilliseconds")
    public Long billedDurationInMilliseconds;
    public BillingDetails withBilledDurationInMilliseconds(Long billedDurationInMilliseconds) {
        this.billedDurationInMilliseconds = billedDurationInMilliseconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billedMemoryUsedInMB")
    public Long billedMemoryUsedInMB;
    public BillingDetails withBilledMemoryUsedInMb(Long billedMemoryUsedInMB) {
        this.billedMemoryUsedInMB = billedMemoryUsedInMB;
        return this;
    }
}