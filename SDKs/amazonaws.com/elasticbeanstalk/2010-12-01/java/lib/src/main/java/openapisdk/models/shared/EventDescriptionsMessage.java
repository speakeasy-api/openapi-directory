package openapisdk.models.shared;



/**
 * EventDescriptionsMessage
 * Result message wrapping a list of event descriptions.
**/
public class EventDescriptionsMessage {
    public EventDescription[] events;
    public EventDescriptionsMessage withEvents(EventDescription[] events) {
        this.events = events;
        return this;
    }
    public String nextToken;
    public EventDescriptionsMessage withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}