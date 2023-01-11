package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BookingOptions
 * At least one delegate must be associated to the resource to disable automatic replies from the resource.
**/
public class BookingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoAcceptRequests")
    public Boolean autoAcceptRequests;
    public BookingOptions withAutoAcceptRequests(Boolean autoAcceptRequests) {
        this.autoAcceptRequests = autoAcceptRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoDeclineConflictingRequests")
    public Boolean autoDeclineConflictingRequests;
    public BookingOptions withAutoDeclineConflictingRequests(Boolean autoDeclineConflictingRequests) {
        this.autoDeclineConflictingRequests = autoDeclineConflictingRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoDeclineRecurringRequests")
    public Boolean autoDeclineRecurringRequests;
    public BookingOptions withAutoDeclineRecurringRequests(Boolean autoDeclineRecurringRequests) {
        this.autoDeclineRecurringRequests = autoDeclineRecurringRequests;
        return this;
    }
}