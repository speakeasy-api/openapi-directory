package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPresetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Ascending")
    public String ascending;
    public ListPresetsQueryParams withAscending(String ascending) {
        this.ascending = ascending;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;
    public ListPresetsQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}