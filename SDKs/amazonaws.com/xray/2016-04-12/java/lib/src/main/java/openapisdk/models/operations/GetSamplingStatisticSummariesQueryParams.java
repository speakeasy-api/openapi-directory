package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSamplingStatisticSummariesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetSamplingStatisticSummariesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}