package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindingProviderSeverity
 * The severity assigned to the finding by the finding provider.
**/
public class FindingProviderSeverity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Label")
    public SeverityLabelEnum label;
    public FindingProviderSeverity withLabel(SeverityLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Original")
    public String original;
    public FindingProviderSeverity withOriginal(String original) {
        this.original = original;
        return this;
    }
}