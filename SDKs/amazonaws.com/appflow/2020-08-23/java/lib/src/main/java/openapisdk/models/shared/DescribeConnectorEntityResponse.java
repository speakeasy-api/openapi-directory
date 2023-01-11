package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeConnectorEntityResponse {
    @JsonProperty("connectorEntityFields")
    public ConnectorEntityField[] connectorEntityFields;
    public DescribeConnectorEntityResponse withConnectorEntityFields(ConnectorEntityField[] connectorEntityFields) {
        this.connectorEntityFields = connectorEntityFields;
        return this;
    }
}