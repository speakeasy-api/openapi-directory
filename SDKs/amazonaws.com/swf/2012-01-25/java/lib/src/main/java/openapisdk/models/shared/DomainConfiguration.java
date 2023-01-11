package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DomainConfiguration
 * Contains the configuration settings of a domain.
**/
public class DomainConfiguration {
    @JsonProperty("workflowExecutionRetentionPeriodInDays")
    public String workflowExecutionRetentionPeriodInDays;
    public DomainConfiguration withWorkflowExecutionRetentionPeriodInDays(String workflowExecutionRetentionPeriodInDays) {
        this.workflowExecutionRetentionPeriodInDays = workflowExecutionRetentionPeriodInDays;
        return this;
    }
}