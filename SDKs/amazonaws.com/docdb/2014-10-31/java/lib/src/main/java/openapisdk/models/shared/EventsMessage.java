package openapisdk.models.shared;



/**
 * EventsMessage
 * Represents the output of <a>DescribeEvents</a>.
**/
public class EventsMessage {
    public EventList[] events;
    public EventsMessage withEvents(EventList[] events) {
        this.events = events;
        return this;
    }
    public String marker;
    public EventsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}