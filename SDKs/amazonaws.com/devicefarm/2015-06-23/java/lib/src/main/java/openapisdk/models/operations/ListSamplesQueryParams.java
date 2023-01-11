package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSamplesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListSamplesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}