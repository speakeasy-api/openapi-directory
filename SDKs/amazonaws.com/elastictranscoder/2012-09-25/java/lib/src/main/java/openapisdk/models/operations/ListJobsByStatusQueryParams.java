package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobsByStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Ascending")
    public String ascending;
    public ListJobsByStatusQueryParams withAscending(String ascending) {
        this.ascending = ascending;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;
    public ListJobsByStatusQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}