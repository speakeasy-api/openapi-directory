package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeTableStatisticsResponse
 * <p/>
**/
public class DescribeTableStatisticsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeTableStatisticsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public DescribeTableStatisticsResponse withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableStatistics")
    public TableStatistics[] tableStatistics;
    public DescribeTableStatisticsResponse withTableStatistics(TableStatistics[] tableStatistics) {
        this.tableStatistics = tableStatistics;
        return this;
    }
}