package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisionedConcurrencyConfigListItem
 * Details about the provisioned concurrency configuration for a function alias or version.
**/
public class ProvisionedConcurrencyConfigListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllocatedProvisionedConcurrentExecutions")
    public Long allocatedProvisionedConcurrentExecutions;
    public ProvisionedConcurrencyConfigListItem withAllocatedProvisionedConcurrentExecutions(Long allocatedProvisionedConcurrentExecutions) {
        this.allocatedProvisionedConcurrentExecutions = allocatedProvisionedConcurrentExecutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailableProvisionedConcurrentExecutions")
    public Long availableProvisionedConcurrentExecutions;
    public ProvisionedConcurrencyConfigListItem withAvailableProvisionedConcurrentExecutions(Long availableProvisionedConcurrentExecutions) {
        this.availableProvisionedConcurrentExecutions = availableProvisionedConcurrentExecutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionArn")
    public String functionArn;
    public ProvisionedConcurrencyConfigListItem withFunctionArn(String functionArn) {
        this.functionArn = functionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModified")
    public String lastModified;
    public ProvisionedConcurrencyConfigListItem withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestedProvisionedConcurrentExecutions")
    public Long requestedProvisionedConcurrentExecutions;
    public ProvisionedConcurrencyConfigListItem withRequestedProvisionedConcurrentExecutions(Long requestedProvisionedConcurrentExecutions) {
        this.requestedProvisionedConcurrentExecutions = requestedProvisionedConcurrentExecutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ProvisionedConcurrencyStatusEnumEnum status;
    public ProvisionedConcurrencyConfigListItem withStatus(ProvisionedConcurrencyStatusEnumEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public String statusReason;
    public ProvisionedConcurrencyConfigListItem withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
}