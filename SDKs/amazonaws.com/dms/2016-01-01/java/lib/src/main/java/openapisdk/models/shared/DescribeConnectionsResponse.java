package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeConnectionsResponse
 * <p/>
**/
public class DescribeConnectionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Connections")
    public Connection[] connections;
    public DescribeConnectionsResponse withConnections(Connection[] connections) {
        this.connections = connections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeConnectionsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}