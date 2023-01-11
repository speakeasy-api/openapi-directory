package openapisdk.models.shared;



/**
 * EventCategoriesMapList
 * An event source type, accompanied by one or more event category names.
**/
public class EventCategoriesMapList {
    public java.util.Map<String, Object>[] eventCategories;
    public EventCategoriesMapList withEventCategories(java.util.Map<String, Object>[] eventCategories) {
        this.eventCategories = eventCategories;
        return this;
    }
    public String sourceType;
    public EventCategoriesMapList withSourceType(String sourceType) {
        this.sourceType = sourceType;
        return this;
    }
}