package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFindingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findings")
    public Finding[] findings;
    public GetFindingsResponse withFindings(Finding[] findings) {
        this.findings = findings;
        return this;
    }
}