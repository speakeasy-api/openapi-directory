package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAuditFindingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finding")
    public AuditFinding finding;
    public DescribeAuditFindingResponse withFinding(AuditFinding finding) {
        this.finding = finding;
        return this;
    }
}