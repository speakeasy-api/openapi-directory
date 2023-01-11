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
 * DomainDeliverabilityTrackingOption
 * An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.
**/
public class DomainDeliverabilityTrackingOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domain")
    public String domain;
    public DomainDeliverabilityTrackingOption withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InboxPlacementTrackingOption")
    public InboxPlacementTrackingOption inboxPlacementTrackingOption;
    public DomainDeliverabilityTrackingOption withInboxPlacementTrackingOption(InboxPlacementTrackingOption inboxPlacementTrackingOption) {
        this.inboxPlacementTrackingOption = inboxPlacementTrackingOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubscriptionStartDate")
    public OffsetDateTime subscriptionStartDate;
    public DomainDeliverabilityTrackingOption withSubscriptionStartDate(OffsetDateTime subscriptionStartDate) {
        this.subscriptionStartDate = subscriptionStartDate;
        return this;
    }
}