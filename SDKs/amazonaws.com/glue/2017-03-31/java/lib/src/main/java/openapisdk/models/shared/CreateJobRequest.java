package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllocatedCapacity")
    public java.util.Map<String, Object> allocatedCapacity;
    public CreateJobRequest withAllocatedCapacity(java.util.Map<String, Object> allocatedCapacity) {
        this.allocatedCapacity = allocatedCapacity;
        return this;
    }
    @JsonProperty("Command")
    public JobCommand command;
    public CreateJobRequest withCommand(JobCommand command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Connections")
    public ConnectionsList connections;
    public CreateJobRequest withConnections(ConnectionsList connections) {
        this.connections = connections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultArguments")
    public java.util.Map<String, String> defaultArguments;
    public CreateJobRequest withDefaultArguments(java.util.Map<String, String> defaultArguments) {
        this.defaultArguments = defaultArguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateJobRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutionProperty")
    public ExecutionProperty executionProperty;
    public CreateJobRequest withExecutionProperty(ExecutionProperty executionProperty) {
        this.executionProperty = executionProperty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlueVersion")
    public String glueVersion;
    public CreateJobRequest withGlueVersion(String glueVersion) {
        this.glueVersion = glueVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogUri")
    public String logUri;
    public CreateJobRequest withLogUri(String logUri) {
        this.logUri = logUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxCapacity")
    public Double maxCapacity;
    public CreateJobRequest withMaxCapacity(Double maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxRetries")
    public Long maxRetries;
    public CreateJobRequest withMaxRetries(Long maxRetries) {
        this.maxRetries = maxRetries;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateJobRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonOverridableArguments")
    public java.util.Map<String, String> nonOverridableArguments;
    public CreateJobRequest withNonOverridableArguments(java.util.Map<String, String> nonOverridableArguments) {
        this.nonOverridableArguments = nonOverridableArguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationProperty")
    public NotificationProperty notificationProperty;
    public CreateJobRequest withNotificationProperty(NotificationProperty notificationProperty) {
        this.notificationProperty = notificationProperty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfWorkers")
    public Long numberOfWorkers;
    public CreateJobRequest withNumberOfWorkers(Long numberOfWorkers) {
        this.numberOfWorkers = numberOfWorkers;
        return this;
    }
    @JsonProperty("Role")
    public String role;
    public CreateJobRequest withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityConfiguration")
    public String securityConfiguration;
    public CreateJobRequest withSecurityConfiguration(String securityConfiguration) {
        this.securityConfiguration = securityConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateJobRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timeout")
    public Long timeout;
    public CreateJobRequest withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerType")
    public WorkerTypeEnum workerType;
    public CreateJobRequest withWorkerType(WorkerTypeEnum workerType) {
        this.workerType = workerType;
        return this;
    }
}