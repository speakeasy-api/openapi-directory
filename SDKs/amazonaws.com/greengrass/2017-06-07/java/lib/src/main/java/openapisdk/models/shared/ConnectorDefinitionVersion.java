package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectorDefinitionVersion
 * Information about the connector definition version, which is a container for connectors.
**/
public class ConnectorDefinitionVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Connectors")
    public Connector[] connectors;
    public ConnectorDefinitionVersion withConnectors(Connector[] connectors) {
        this.connectors = connectors;
        return this;
    }
}