package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationConfigRuleDetailedStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public GetOrganizationConfigRuleDetailedStatusQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetOrganizationConfigRuleDetailedStatusQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}