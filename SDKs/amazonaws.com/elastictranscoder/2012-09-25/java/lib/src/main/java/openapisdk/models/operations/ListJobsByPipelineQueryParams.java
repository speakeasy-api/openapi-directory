package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobsByPipelineQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Ascending")
    public String ascending;
    public ListJobsByPipelineQueryParams withAscending(String ascending) {
        this.ascending = ascending;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;
    public ListJobsByPipelineQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}