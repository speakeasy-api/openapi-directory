package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateConnectorDefinitionRequestBodyInitialVersion
 * Information about the connector definition version, which is a container for connectors.
**/
public class CreateConnectorDefinitionRequestBodyInitialVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Connectors")
    public openapisdk.models.shared.Connector[] connectors;
    public CreateConnectorDefinitionRequestBodyInitialVersion withConnectors(openapisdk.models.shared.Connector[] connectors) {
        this.connectors = connectors;
        return this;
    }
}