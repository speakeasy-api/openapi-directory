package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuditCandidateSearchList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public AuditCandidateSearch[] results;
    public AuditCandidateSearchList withResults(AuditCandidateSearch[] results) {
        this.results = results;
        return this;
    }
}