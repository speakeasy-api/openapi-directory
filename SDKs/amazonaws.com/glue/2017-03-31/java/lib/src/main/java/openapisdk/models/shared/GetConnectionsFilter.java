package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetConnectionsFilter
 * Filters the connection definitions that are returned by the <code>GetConnections</code> API operation.
**/
public class GetConnectionsFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionType")
    public ConnectionTypeEnum connectionType;
    public GetConnectionsFilter withConnectionType(ConnectionTypeEnum connectionType) {
        this.connectionType = connectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MatchCriteria")
    public String[] matchCriteria;
    public GetConnectionsFilter withMatchCriteria(String[] matchCriteria) {
        this.matchCriteria = matchCriteria;
        return this;
    }
}