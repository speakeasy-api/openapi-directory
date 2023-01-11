package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConnectionUpdate {
    @JsonProperty("connectionId")
    public String connectionId;
    public ConnectionUpdate withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceDefinition")
    public NamespaceDefinitionTypeEnum namespaceDefinition;
    public ConnectionUpdate withNamespaceDefinition(NamespaceDefinitionTypeEnum namespaceDefinition) {
        this.namespaceDefinition = namespaceDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceFormat")
    public String namespaceFormat;
    public ConnectionUpdate withNamespaceFormat(String namespaceFormat) {
        this.namespaceFormat = namespaceFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationIds")
    public String[] operationIds;
    public ConnectionUpdate withOperationIds(String[] operationIds) {
        this.operationIds = operationIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public ConnectionUpdate withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRequirements")
    public ResourceRequirements resourceRequirements;
    public ConnectionUpdate withResourceRequirements(ResourceRequirements resourceRequirements) {
        this.resourceRequirements = resourceRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public ConnectionSchedule schedule;
    public ConnectionUpdate withSchedule(ConnectionSchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonProperty("status")
    public ConnectionStatusEnum status;
    public ConnectionUpdate withStatus(ConnectionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("syncCatalog")
    public AirbyteCatalog syncCatalog;
    public ConnectionUpdate withSyncCatalog(AirbyteCatalog syncCatalog) {
        this.syncCatalog = syncCatalog;
        return this;
    }
}