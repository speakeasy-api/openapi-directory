package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuditCommitteeSearchList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public AuditCommitteeSearch[] results;
    public AuditCommitteeSearchList withResults(AuditCommitteeSearch[] results) {
        this.results = results;
        return this;
    }
}