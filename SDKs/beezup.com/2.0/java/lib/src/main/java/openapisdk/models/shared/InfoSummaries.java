package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InfoSummaries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ErrorSummary[] errors;
    public InfoSummaries withErrors(ErrorSummary[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("informations")
    public InfoSummary[] informations;
    public InfoSummaries withInformations(InfoSummary[] informations) {
        this.informations = informations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successes")
    public SuccessSummary[] successes;
    public InfoSummaries withSuccesses(SuccessSummary[] successes) {
        this.successes = successes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public WarningSummary[] warnings;
    public InfoSummaries withWarnings(WarningSummary[] warnings) {
        this.warnings = warnings;
        return this;
    }
}