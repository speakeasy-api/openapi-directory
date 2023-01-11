package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeComplianceByConfigRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeComplianceByConfigRuleQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}