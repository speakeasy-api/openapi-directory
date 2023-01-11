package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEventsRequestBodyFilters
 *  Filters you can use to specify which events are returned when <code>ListEvents</code> is called. 
**/
public class ListEventsRequestBodyFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSource")
    public openapisdk.models.shared.EventDataSourceEnum dataSource;
    public ListEventsRequestBodyFilters withDataSource(openapisdk.models.shared.EventDataSourceEnum dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventClass")
    public openapisdk.models.shared.EventClassEnum eventClass;
    public ListEventsRequestBodyFilters withEventClass(openapisdk.models.shared.EventClassEnum eventClass) {
        this.eventClass = eventClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSource")
    public String eventSource;
    public ListEventsRequestBodyFilters withEventSource(String eventSource) {
        this.eventSource = eventSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventTimeRange")
    public openapisdk.models.shared.EventTimeRange eventTimeRange;
    public ListEventsRequestBodyFilters withEventTimeRange(openapisdk.models.shared.EventTimeRange eventTimeRange) {
        this.eventTimeRange = eventTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightId")
    public String insightId;
    public ListEventsRequestBodyFilters withInsightId(String insightId) {
        this.insightId = insightId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCollection")
    public openapisdk.models.shared.ResourceCollection resourceCollection;
    public ListEventsRequestBodyFilters withResourceCollection(openapisdk.models.shared.ResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
}