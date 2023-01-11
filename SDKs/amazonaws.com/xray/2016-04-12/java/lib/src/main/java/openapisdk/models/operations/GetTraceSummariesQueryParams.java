package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTraceSummariesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetTraceSummariesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}