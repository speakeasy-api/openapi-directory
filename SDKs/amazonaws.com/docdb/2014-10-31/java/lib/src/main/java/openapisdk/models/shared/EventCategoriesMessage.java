package openapisdk.models.shared;



/**
 * EventCategoriesMessage
 * Represents the output of <a>DescribeEventCategories</a>.
**/
public class EventCategoriesMessage {
    public EventCategoriesMapList[] eventCategoriesMapList;
    public EventCategoriesMessage withEventCategoriesMapList(EventCategoriesMapList[] eventCategoriesMapList) {
        this.eventCategoriesMapList = eventCategoriesMapList;
        return this;
    }
}