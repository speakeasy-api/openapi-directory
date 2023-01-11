package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutDeliverabilityDashboardOptionRequestBody {
    @JsonProperty("DashboardEnabled")
    public Boolean dashboardEnabled;
    public PutDeliverabilityDashboardOptionRequestBody withDashboardEnabled(Boolean dashboardEnabled) {
        this.dashboardEnabled = dashboardEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscribedDomains")
    public openapisdk.models.shared.DomainDeliverabilityTrackingOption[] subscribedDomains;
    public PutDeliverabilityDashboardOptionRequestBody withSubscribedDomains(openapisdk.models.shared.DomainDeliverabilityTrackingOption[] subscribedDomains) {
        this.subscribedDomains = subscribedDomains;
        return this;
    }
}