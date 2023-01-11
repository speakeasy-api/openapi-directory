package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConnectorDefinitionVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Connectors")
    public openapisdk.models.shared.Connector[] connectors;
    public CreateConnectorDefinitionVersionRequestBody withConnectors(openapisdk.models.shared.Connector[] connectors) {
        this.connectors = connectors;
        return this;
    }
}