package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExpiryEventsConfiguration
 * Object containing expiration events options associated with an Amazon Web Services account.
**/
public class ExpiryEventsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DaysBeforeExpiry")
    public Long daysBeforeExpiry;
    public ExpiryEventsConfiguration withDaysBeforeExpiry(Long daysBeforeExpiry) {
        this.daysBeforeExpiry = daysBeforeExpiry;
        return this;
    }
}