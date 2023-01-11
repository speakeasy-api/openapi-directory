package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonMursDispositions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("citations")
    public GetLegalSearchDefaultApplicationJsonMursDispositionsCitations[] citations;
    public GetLegalSearchDefaultApplicationJsonMursDispositions withCitations(GetLegalSearchDefaultApplicationJsonMursDispositionsCitations[] citations) {
        this.citations = citations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disposition")
    public String disposition;
    public GetLegalSearchDefaultApplicationJsonMursDispositions withDisposition(String disposition) {
        this.disposition = disposition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("penalty")
    public Double penalty;
    public GetLegalSearchDefaultApplicationJsonMursDispositions withPenalty(Double penalty) {
        this.penalty = penalty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("respondent")
    public String respondent;
    public GetLegalSearchDefaultApplicationJsonMursDispositions withRespondent(String respondent) {
        this.respondent = respondent;
        return this;
    }
}