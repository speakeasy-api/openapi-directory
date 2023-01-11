package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindMatchesParameters
 * The parameters to configure the find matches transform.
**/
public class FindMatchesParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccuracyCostTradeoff")
    public Double accuracyCostTradeoff;
    public FindMatchesParameters withAccuracyCostTradeoff(Double accuracyCostTradeoff) {
        this.accuracyCostTradeoff = accuracyCostTradeoff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnforceProvidedLabels")
    public Boolean enforceProvidedLabels;
    public FindMatchesParameters withEnforceProvidedLabels(Boolean enforceProvidedLabels) {
        this.enforceProvidedLabels = enforceProvidedLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrecisionRecallTradeoff")
    public Double precisionRecallTradeoff;
    public FindMatchesParameters withPrecisionRecallTradeoff(Double precisionRecallTradeoff) {
        this.precisionRecallTradeoff = precisionRecallTradeoff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryKeyColumnName")
    public String primaryKeyColumnName;
    public FindMatchesParameters withPrimaryKeyColumnName(String primaryKeyColumnName) {
        this.primaryKeyColumnName = primaryKeyColumnName;
        return this;
    }
}