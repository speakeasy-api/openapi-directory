package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebBackendConnectionUpdate {
    @JsonProperty("connectionId")
    public String connectionId;
    public WebBackendConnectionUpdate withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceDefinition")
    public NamespaceDefinitionTypeEnum namespaceDefinition;
    public WebBackendConnectionUpdate withNamespaceDefinition(NamespaceDefinitionTypeEnum namespaceDefinition) {
        this.namespaceDefinition = namespaceDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceFormat")
    public String namespaceFormat;
    public WebBackendConnectionUpdate withNamespaceFormat(String namespaceFormat) {
        this.namespaceFormat = namespaceFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationIds")
    public String[] operationIds;
    public WebBackendConnectionUpdate withOperationIds(String[] operationIds) {
        this.operationIds = operationIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public WebBackendOperationCreateOrUpdate[] operations;
    public WebBackendConnectionUpdate withOperations(WebBackendOperationCreateOrUpdate[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public WebBackendConnectionUpdate withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRequirements")
    public ResourceRequirements resourceRequirements;
    public WebBackendConnectionUpdate withResourceRequirements(ResourceRequirements resourceRequirements) {
        this.resourceRequirements = resourceRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public ConnectionSchedule schedule;
    public WebBackendConnectionUpdate withSchedule(ConnectionSchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonProperty("status")
    public ConnectionStatusEnum status;
    public WebBackendConnectionUpdate withStatus(ConnectionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("syncCatalog")
    public AirbyteCatalog syncCatalog;
    public WebBackendConnectionUpdate withSyncCatalog(AirbyteCatalog syncCatalog) {
        this.syncCatalog = syncCatalog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withRefreshedCatalog")
    public Boolean withRefreshedCatalog;
    public WebBackendConnectionUpdate withWithRefreshedCatalog(Boolean withRefreshedCatalog) {
        this.withRefreshedCatalog = withRefreshedCatalog;
        return this;
    }
}