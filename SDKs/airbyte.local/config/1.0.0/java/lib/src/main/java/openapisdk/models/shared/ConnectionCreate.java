package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConnectionCreate {
    @JsonProperty("destinationId")
    public String destinationId;
    public ConnectionCreate withDestinationId(String destinationId) {
        this.destinationId = destinationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConnectionCreate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceDefinition")
    public NamespaceDefinitionTypeEnum namespaceDefinition;
    public ConnectionCreate withNamespaceDefinition(NamespaceDefinitionTypeEnum namespaceDefinition) {
        this.namespaceDefinition = namespaceDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceFormat")
    public String namespaceFormat;
    public ConnectionCreate withNamespaceFormat(String namespaceFormat) {
        this.namespaceFormat = namespaceFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationIds")
    public String[] operationIds;
    public ConnectionCreate withOperationIds(String[] operationIds) {
        this.operationIds = operationIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public ConnectionCreate withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRequirements")
    public ResourceRequirements resourceRequirements;
    public ConnectionCreate withResourceRequirements(ResourceRequirements resourceRequirements) {
        this.resourceRequirements = resourceRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public ConnectionSchedule schedule;
    public ConnectionCreate withSchedule(ConnectionSchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonProperty("sourceId")
    public String sourceId;
    public ConnectionCreate withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonProperty("status")
    public ConnectionStatusEnum status;
    public ConnectionCreate withStatus(ConnectionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncCatalog")
    public AirbyteCatalog syncCatalog;
    public ConnectionCreate withSyncCatalog(AirbyteCatalog syncCatalog) {
        this.syncCatalog = syncCatalog;
        return this;
    }
}