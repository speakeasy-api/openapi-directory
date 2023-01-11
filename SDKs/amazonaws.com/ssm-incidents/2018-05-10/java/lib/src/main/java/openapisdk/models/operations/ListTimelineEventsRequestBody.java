package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTimelineEventsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public openapisdk.models.shared.Filter[] filters;
    public ListTimelineEventsRequestBody withFilters(openapisdk.models.shared.Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonProperty("incidentRecordArn")
    public String incidentRecordArn;
    public ListTimelineEventsRequestBody withIncidentRecordArn(String incidentRecordArn) {
        this.incidentRecordArn = incidentRecordArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListTimelineEventsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTimelineEventsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortBy")
    public ListTimelineEventsRequestBodySortByEnum sortBy;
    public ListTimelineEventsRequestBody withSortBy(ListTimelineEventsRequestBodySortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public ListTimelineEventsRequestBodySortOrderEnum sortOrder;
    public ListTimelineEventsRequestBody withSortOrder(ListTimelineEventsRequestBodySortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}