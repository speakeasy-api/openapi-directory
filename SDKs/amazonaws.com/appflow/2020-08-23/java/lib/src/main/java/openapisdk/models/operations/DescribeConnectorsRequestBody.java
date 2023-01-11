package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConnectorsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorTypes")
    public openapisdk.models.shared.ConnectorTypeEnum[] connectorTypes;
    public DescribeConnectorsRequestBody withConnectorTypes(openapisdk.models.shared.ConnectorTypeEnum[] connectorTypes) {
        this.connectorTypes = connectorTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeConnectorsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}