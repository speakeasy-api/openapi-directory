package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Severity
 * <p>The severity of the finding.</p> <p>The finding provider can provide the initial severity. The finding provider can only update the severity if it has not been updated using <code>BatchUpdateFindings</code>.</p> <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If only one of these attributes is populated, then Security Hub automatically populates the other one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is the preferred attribute.</p>
**/
public class Severity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Label")
    public SeverityLabelEnum label;
    public Severity withLabel(SeverityLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Normalized")
    public Long normalized;
    public Severity withNormalized(Long normalized) {
        this.normalized = normalized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Original")
    public String original;
    public Severity withOriginal(String original) {
        this.original = original;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Product")
    public Double product;
    public Severity withProduct(Double product) {
        this.product = product;
        return this;
    }
}