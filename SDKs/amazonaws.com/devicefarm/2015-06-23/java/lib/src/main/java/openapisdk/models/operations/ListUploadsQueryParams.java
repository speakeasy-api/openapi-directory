package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUploadsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListUploadsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}