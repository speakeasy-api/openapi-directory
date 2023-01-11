package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetTracesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public BatchGetTracesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}