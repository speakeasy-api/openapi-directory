package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConnectorProfilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorProfileDetails")
    public ConnectorProfile[] connectorProfileDetails;
    public DescribeConnectorProfilesResponse withConnectorProfileDetails(ConnectorProfile[] connectorProfileDetails) {
        this.connectorProfileDetails = connectorProfileDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeConnectorProfilesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}