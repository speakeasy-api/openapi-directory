package openapisdk.models.shared;



/**
 * EventCategoriesMessage
 * Data returned from the <code>DescribeEventCategories</code> operation.
**/
public class EventCategoriesMessage {
    public EventCategoriesMapList[] eventCategoriesMapList;
    public EventCategoriesMessage withEventCategoriesMapList(EventCategoriesMapList[] eventCategoriesMapList) {
        this.eventCategoriesMapList = eventCategoriesMapList;
        return this;
    }
}