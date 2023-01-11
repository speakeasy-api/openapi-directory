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
 * GetDeliverabilityDashboardOptionsResponse
 * An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account.
**/
public class GetDeliverabilityDashboardOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountStatus")
    public DeliverabilityDashboardAccountStatusEnum accountStatus;
    public GetDeliverabilityDashboardOptionsResponse withAccountStatus(DeliverabilityDashboardAccountStatusEnum accountStatus) {
        this.accountStatus = accountStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActiveSubscribedDomains")
    public DomainDeliverabilityTrackingOption[] activeSubscribedDomains;
    public GetDeliverabilityDashboardOptionsResponse withActiveSubscribedDomains(DomainDeliverabilityTrackingOption[] activeSubscribedDomains) {
        this.activeSubscribedDomains = activeSubscribedDomains;
        return this;
    }
    @JsonProperty("DashboardEnabled")
    public Boolean dashboardEnabled;
    public GetDeliverabilityDashboardOptionsResponse withDashboardEnabled(Boolean dashboardEnabled) {
        this.dashboardEnabled = dashboardEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingExpirationSubscribedDomains")
    public DomainDeliverabilityTrackingOption[] pendingExpirationSubscribedDomains;
    public GetDeliverabilityDashboardOptionsResponse withPendingExpirationSubscribedDomains(DomainDeliverabilityTrackingOption[] pendingExpirationSubscribedDomains) {
        this.pendingExpirationSubscribedDomains = pendingExpirationSubscribedDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubscriptionExpiryDate")
    public OffsetDateTime subscriptionExpiryDate;
    public GetDeliverabilityDashboardOptionsResponse withSubscriptionExpiryDate(OffsetDateTime subscriptionExpiryDate) {
        this.subscriptionExpiryDate = subscriptionExpiryDate;
        return this;
    }
}