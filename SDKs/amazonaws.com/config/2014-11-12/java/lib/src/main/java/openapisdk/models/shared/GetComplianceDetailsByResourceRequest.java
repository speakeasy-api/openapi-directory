package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetComplianceDetailsByResourceRequest
 * <p/>
**/
public class GetComplianceDetailsByResourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceTypes")
    public ComplianceTypeEnum[] complianceTypes;
    public GetComplianceDetailsByResourceRequest withComplianceTypes(ComplianceTypeEnum[] complianceTypes) {
        this.complianceTypes = complianceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetComplianceDetailsByResourceRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public GetComplianceDetailsByResourceRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("ResourceType")
    public String resourceType;
    public GetComplianceDetailsByResourceRequest withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}