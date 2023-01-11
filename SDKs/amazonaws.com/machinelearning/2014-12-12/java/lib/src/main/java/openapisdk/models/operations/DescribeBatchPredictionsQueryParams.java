package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBatchPredictionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public DescribeBatchPredictionsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeBatchPredictionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}