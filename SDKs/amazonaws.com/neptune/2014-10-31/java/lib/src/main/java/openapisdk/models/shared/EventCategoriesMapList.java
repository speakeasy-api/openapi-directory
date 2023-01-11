package openapisdk.models.shared;



/**
 * EventCategoriesMapList
 * Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.
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