package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListContactsRequestBodyFilter
 * A filter that can be applied to a list of contacts.
**/
public class ListContactsRequestBodyFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilteredStatus")
    public openapisdk.models.shared.SubscriptionStatusEnum filteredStatus;
    public ListContactsRequestBodyFilter withFilteredStatus(openapisdk.models.shared.SubscriptionStatusEnum filteredStatus) {
        this.filteredStatus = filteredStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicFilter")
    public openapisdk.models.shared.TopicFilter topicFilter;
    public ListContactsRequestBodyFilter withTopicFilter(openapisdk.models.shared.TopicFilter topicFilter) {
        this.topicFilter = topicFilter;
        return this;
    }
}