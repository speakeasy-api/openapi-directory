package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAuditSuppressionRequestBody {
    @JsonProperty("checkName")
    public String checkName;
    public DeleteAuditSuppressionRequestBody withCheckName(String checkName) {
        this.checkName = checkName;
        return this;
    }
    @JsonProperty("resourceIdentifier")
    public DeleteAuditSuppressionRequestBodyResourceIdentifier resourceIdentifier;
    public DeleteAuditSuppressionRequestBody withResourceIdentifier(DeleteAuditSuppressionRequestBodyResourceIdentifier resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
}