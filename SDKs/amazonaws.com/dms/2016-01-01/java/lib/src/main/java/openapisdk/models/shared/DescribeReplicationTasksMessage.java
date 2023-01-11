package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeReplicationTasksMessage
 * <p/>
**/
public class DescribeReplicationTasksMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public Filter[] filters;
    public DescribeReplicationTasksMessage withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeReplicationTasksMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxRecords")
    public Long maxRecords;
    public DescribeReplicationTasksMessage withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WithoutSettings")
    public Boolean withoutSettings;
    public DescribeReplicationTasksMessage withWithoutSettings(Boolean withoutSettings) {
        this.withoutSettings = withoutSettings;
        return this;
    }
}