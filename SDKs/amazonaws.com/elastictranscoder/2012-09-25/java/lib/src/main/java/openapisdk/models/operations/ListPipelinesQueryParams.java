package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPipelinesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Ascending")
    public String ascending;
    public ListPipelinesQueryParams withAscending(String ascending) {
        this.ascending = ascending;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;
    public ListPipelinesQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}