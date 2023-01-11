package openapisdk.models.shared;



/**
 * EventCategoriesMapList
 * Describes event categories.
**/
public class EventCategoriesMapList {
    public EventInfoMapList[] events;
    public EventCategoriesMapList withEvents(EventInfoMapList[] events) {
        this.events = events;
        return this;
    }
    public String sourceType;
    public EventCategoriesMapList withSourceType(String sourceType) {
        this.sourceType = sourceType;
        return this;
    }
}