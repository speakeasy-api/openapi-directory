package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebBackendConnectionRead {
    @JsonProperty("connectionId")
    public String connectionId;
    public WebBackendConnectionRead withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("destination")
    public DestinationRead destination;
    public WebBackendConnectionRead withDestination(DestinationRead destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("destinationId")
    public String destinationId;
    public WebBackendConnectionRead withDestinationId(String destinationId) {
        this.destinationId = destinationId;
        return this;
    }
    @JsonProperty("isSyncing")
    public Boolean isSyncing;
    public WebBackendConnectionRead withIsSyncing(Boolean isSyncing) {
        this.isSyncing = isSyncing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestSyncJobCreatedAt")
    public Long latestSyncJobCreatedAt;
    public WebBackendConnectionRead withLatestSyncJobCreatedAt(Long latestSyncJobCreatedAt) {
        this.latestSyncJobCreatedAt = latestSyncJobCreatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestSyncJobStatus")
    public JobStatusEnum latestSyncJobStatus;
    public WebBackendConnectionRead withLatestSyncJobStatus(JobStatusEnum latestSyncJobStatus) {
        this.latestSyncJobStatus = latestSyncJobStatus;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WebBackendConnectionRead withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceDefinition")
    public NamespaceDefinitionTypeEnum namespaceDefinition;
    public WebBackendConnectionRead withNamespaceDefinition(NamespaceDefinitionTypeEnum namespaceDefinition) {
        this.namespaceDefinition = namespaceDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceFormat")
    public String namespaceFormat;
    public WebBackendConnectionRead withNamespaceFormat(String namespaceFormat) {
        this.namespaceFormat = namespaceFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationIds")
    public String[] operationIds;
    public WebBackendConnectionRead withOperationIds(String[] operationIds) {
        this.operationIds = operationIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public OperationRead[] operations;
    public WebBackendConnectionRead withOperations(OperationRead[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public WebBackendConnectionRead withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRequirements")
    public ResourceRequirements resourceRequirements;
    public WebBackendConnectionRead withResourceRequirements(ResourceRequirements resourceRequirements) {
        this.resourceRequirements = resourceRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public ConnectionSchedule schedule;
    public WebBackendConnectionRead withSchedule(ConnectionSchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonProperty("source")
    public SourceRead source;
    public WebBackendConnectionRead withSource(SourceRead source) {
        this.source = source;
        return this;
    }
    @JsonProperty("sourceId")
    public String sourceId;
    public WebBackendConnectionRead withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonProperty("status")
    public ConnectionStatusEnum status;
    public WebBackendConnectionRead withStatus(ConnectionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("syncCatalog")
    public AirbyteCatalog syncCatalog;
    public WebBackendConnectionRead withSyncCatalog(AirbyteCatalog syncCatalog) {
        this.syncCatalog = syncCatalog;
        return this;
    }
}