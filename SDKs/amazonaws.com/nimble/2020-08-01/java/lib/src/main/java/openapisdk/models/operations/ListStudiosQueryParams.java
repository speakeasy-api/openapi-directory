package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStudiosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListStudiosQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}