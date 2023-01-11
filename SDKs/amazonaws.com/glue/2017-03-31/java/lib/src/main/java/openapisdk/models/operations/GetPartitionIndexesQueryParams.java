package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPartitionIndexesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetPartitionIndexesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}