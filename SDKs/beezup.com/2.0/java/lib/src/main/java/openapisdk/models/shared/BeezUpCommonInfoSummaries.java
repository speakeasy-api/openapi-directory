package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BeezUpCommonInfoSummaries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public BeezUpCommonErrorSummary[] errors;
    public BeezUpCommonInfoSummaries withErrors(BeezUpCommonErrorSummary[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("informations")
    public BeezUpCommonInfoSummary[] informations;
    public BeezUpCommonInfoSummaries withInformations(BeezUpCommonInfoSummary[] informations) {
        this.informations = informations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successes")
    public BeezUpCommonSuccessSummary[] successes;
    public BeezUpCommonInfoSummaries withSuccesses(BeezUpCommonSuccessSummary[] successes) {
        this.successes = successes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public BeezUpCommonWarningSummary[] warnings;
    public BeezUpCommonInfoSummaries withWarnings(BeezUpCommonWarningSummary[] warnings) {
        this.warnings = warnings;
        return this;
    }
}