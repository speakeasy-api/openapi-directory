package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeEventCategoriesResponse
 * <p/>
**/
public class DescribeEventCategoriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventCategoryGroupList")
    public EventCategoryGroup[] eventCategoryGroupList;
    public DescribeEventCategoriesResponse withEventCategoryGroupList(EventCategoryGroup[] eventCategoryGroupList) {
        this.eventCategoryGroupList = eventCategoryGroupList;
        return this;
    }
}