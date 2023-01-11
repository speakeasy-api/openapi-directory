package openapisdk.models.shared;



/**
 * EventSubscriptionsMessage
 * <p/>
**/
public class EventSubscriptionsMessage {
    public EventSubscriptionsList[] eventSubscriptionsList;
    public EventSubscriptionsMessage withEventSubscriptionsList(EventSubscriptionsList[] eventSubscriptionsList) {
        this.eventSubscriptionsList = eventSubscriptionsList;
        return this;
    }
    public String marker;
    public EventSubscriptionsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}