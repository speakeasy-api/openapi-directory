package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNotificationChannelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListNotificationChannelsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}