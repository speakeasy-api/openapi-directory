package openapisdk.models.shared;



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