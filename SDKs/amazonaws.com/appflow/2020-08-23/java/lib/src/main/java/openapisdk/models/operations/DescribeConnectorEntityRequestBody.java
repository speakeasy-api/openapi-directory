package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConnectorEntityRequestBody {
    @JsonProperty("connectorEntityName")
    public String connectorEntityName;
    public DescribeConnectorEntityRequestBody withConnectorEntityName(String connectorEntityName) {
        this.connectorEntityName = connectorEntityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorProfileName")
    public String connectorProfileName;
    public DescribeConnectorEntityRequestBody withConnectorProfileName(String connectorProfileName) {
        this.connectorProfileName = connectorProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorType")
    public DescribeConnectorEntityRequestBodyConnectorTypeEnum connectorType;
    public DescribeConnectorEntityRequestBody withConnectorType(DescribeConnectorEntityRequestBodyConnectorTypeEnum connectorType) {
        this.connectorType = connectorType;
        return this;
    }
}