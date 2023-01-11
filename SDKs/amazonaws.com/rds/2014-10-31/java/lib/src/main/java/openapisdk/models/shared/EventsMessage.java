package openapisdk.models.shared;



/**
 * EventsMessage
 *  Contains the result of a successful invocation of the <code>DescribeEvents</code> action. 
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