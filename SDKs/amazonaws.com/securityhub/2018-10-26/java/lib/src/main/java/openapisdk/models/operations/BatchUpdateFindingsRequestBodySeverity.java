package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateFindingsRequestBodySeverity
 * Updates to the severity information for a finding.
**/
public class BatchUpdateFindingsRequestBodySeverity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Label")
    public openapisdk.models.shared.SeverityLabelEnum label;
    public BatchUpdateFindingsRequestBodySeverity withLabel(openapisdk.models.shared.SeverityLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Normalized")
    public Long normalized;
    public BatchUpdateFindingsRequestBodySeverity withNormalized(Long normalized) {
        this.normalized = normalized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Product")
    public Double product;
    public BatchUpdateFindingsRequestBodySeverity withProduct(Double product) {
        this.product = product;
        return this;
    }
}