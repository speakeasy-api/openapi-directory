package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDevicePoolsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDevicePoolsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}