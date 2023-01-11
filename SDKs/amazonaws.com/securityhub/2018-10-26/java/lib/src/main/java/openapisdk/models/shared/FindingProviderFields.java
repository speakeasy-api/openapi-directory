package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindingProviderFields
 * In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.
**/
public class FindingProviderFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Long confidence;
    public FindingProviderFields withConfidence(Long confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Criticality")
    public Long criticality;
    public FindingProviderFields withCriticality(Long criticality) {
        this.criticality = criticality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelatedFindings")
    public RelatedFinding[] relatedFindings;
    public FindingProviderFields withRelatedFindings(RelatedFinding[] relatedFindings) {
        this.relatedFindings = relatedFindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Severity")
    public FindingProviderSeverity severity;
    public FindingProviderFields withSeverity(FindingProviderSeverity severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Types")
    public String[] types;
    public FindingProviderFields withTypes(String[] types) {
        this.types = types;
        return this;
    }
}