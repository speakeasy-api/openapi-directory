package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeReplicationSubnetGroupsMessage
 * <p/>
**/
public class DescribeReplicationSubnetGroupsMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public Filter[] filters;
    public DescribeReplicationSubnetGroupsMessage withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeReplicationSubnetGroupsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxRecords")
    public Long maxRecords;
    public DescribeReplicationSubnetGroupsMessage withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
}