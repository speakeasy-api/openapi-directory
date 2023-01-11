package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Connector
 * Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
**/
public class Connector {
    @JsonProperty("ConnectorArn")
    public String connectorArn;
    public Connector withConnectorArn(String connectorArn) {
        this.connectorArn = connectorArn;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public Connector withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String> parameters;
    public Connector withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
}