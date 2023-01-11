package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeComplianceByResourceResponse
 * <p/>
**/
public class DescribeComplianceByResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceByResources")
    public ComplianceByResource[] complianceByResources;
    public DescribeComplianceByResourceResponse withComplianceByResources(ComplianceByResource[] complianceByResources) {
        this.complianceByResources = complianceByResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeComplianceByResourceResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}