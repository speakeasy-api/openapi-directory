package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebBackendConnectionCreate {
    @JsonProperty("destinationId")
    public String destinationId;
    public WebBackendConnectionCreate withDestinationId(String destinationId) {
        this.destinationId = destinationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WebBackendConnectionCreate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceDefinition")
    public NamespaceDefinitionTypeEnum namespaceDefinition;
    public WebBackendConnectionCreate withNamespaceDefinition(NamespaceDefinitionTypeEnum namespaceDefinition) {
        this.namespaceDefinition = namespaceDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceFormat")
    public String namespaceFormat;
    public WebBackendConnectionCreate withNamespaceFormat(String namespaceFormat) {
        this.namespaceFormat = namespaceFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationIds")
    public String[] operationIds;
    public WebBackendConnectionCreate withOperationIds(String[] operationIds) {
        this.operationIds = operationIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public OperationCreate[] operations;
    public WebBackendConnectionCreate withOperations(OperationCreate[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public WebBackendConnectionCreate withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRequirements")
    public ResourceRequirements resourceRequirements;
    public WebBackendConnectionCreate withResourceRequirements(ResourceRequirements resourceRequirements) {
        this.resourceRequirements = resourceRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public ConnectionSchedule schedule;
    public WebBackendConnectionCreate withSchedule(ConnectionSchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonProperty("sourceId")
    public String sourceId;
    public WebBackendConnectionCreate withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonProperty("status")
    public ConnectionStatusEnum status;
    public WebBackendConnectionCreate withStatus(ConnectionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncCatalog")
    public AirbyteCatalog syncCatalog;
    public WebBackendConnectionCreate withSyncCatalog(AirbyteCatalog syncCatalog) {
        this.syncCatalog = syncCatalog;
        return this;
    }
}