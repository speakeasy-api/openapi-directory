package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeEventSubscriptionsResponse
 * <p/>
**/
public class DescribeEventSubscriptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSubscriptionsList")
    public EventSubscription[] eventSubscriptionsList;
    public DescribeEventSubscriptionsResponse withEventSubscriptionsList(EventSubscription[] eventSubscriptionsList) {
        this.eventSubscriptionsList = eventSubscriptionsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeEventSubscriptionsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}