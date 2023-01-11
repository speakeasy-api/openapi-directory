package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StorageConnector
 * Describes a connector that enables persistent storage for users.
**/
public class StorageConnector {
    @JsonProperty("ConnectorType")
    public StorageConnectorTypeEnum connectorType;
    public StorageConnector withConnectorType(StorageConnectorTypeEnum connectorType) {
        this.connectorType = connectorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domains")
    public String[] domains;
    public StorageConnector withDomains(String[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceIdentifier")
    public String resourceIdentifier;
    public StorageConnector withResourceIdentifier(String resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
}