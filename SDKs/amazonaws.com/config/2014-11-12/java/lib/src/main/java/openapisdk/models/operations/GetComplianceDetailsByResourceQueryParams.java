package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComplianceDetailsByResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetComplianceDetailsByResourceQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}