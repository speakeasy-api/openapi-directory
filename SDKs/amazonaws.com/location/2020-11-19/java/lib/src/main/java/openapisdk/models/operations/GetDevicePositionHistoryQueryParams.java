package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevicePositionHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDevicePositionHistoryQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}