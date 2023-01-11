package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonAdrsDispositions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("citations")
    public GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations[] citations;
    public GetLegalSearchDefaultApplicationJsonAdrsDispositions withCitations(GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations[] citations) {
        this.citations = citations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disposition")
    public String disposition;
    public GetLegalSearchDefaultApplicationJsonAdrsDispositions withDisposition(String disposition) {
        this.disposition = disposition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("penalty")
    public Double penalty;
    public GetLegalSearchDefaultApplicationJsonAdrsDispositions withPenalty(Double penalty) {
        this.penalty = penalty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("respondent")
    public String respondent;
    public GetLegalSearchDefaultApplicationJsonAdrsDispositions withRespondent(String respondent) {
        this.respondent = respondent;
        return this;
    }
}