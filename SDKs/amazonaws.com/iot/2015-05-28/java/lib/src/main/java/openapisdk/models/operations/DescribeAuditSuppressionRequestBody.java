package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAuditSuppressionRequestBody {
    @JsonProperty("checkName")
    public String checkName;
    public DescribeAuditSuppressionRequestBody withCheckName(String checkName) {
        this.checkName = checkName;
        return this;
    }
    @JsonProperty("resourceIdentifier")
    public DescribeAuditSuppressionRequestBodyResourceIdentifier resourceIdentifier;
    public DescribeAuditSuppressionRequestBody withResourceIdentifier(DescribeAuditSuppressionRequestBodyResourceIdentifier resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
}