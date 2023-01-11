package openapisdk.models.shared;



/**
 * EventInfoMapList
 * Describes event information.
**/
public class EventInfoMapList {
    public java.util.Map<String, Object>[] eventCategories;
    public EventInfoMapList withEventCategories(java.util.Map<String, Object>[] eventCategories) {
        this.eventCategories = eventCategories;
        return this;
    }
    public String eventDescription;
    public EventInfoMapList withEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
        return this;
    }
    public String eventId;
    public EventInfoMapList withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    public String severity;
    public EventInfoMapList withSeverity(String severity) {
        this.severity = severity;
        return this;
    }
}