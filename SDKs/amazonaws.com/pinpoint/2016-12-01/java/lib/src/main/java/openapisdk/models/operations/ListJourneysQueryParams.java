package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJourneysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page-size")
    public String pageSize;
    public ListJourneysQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public ListJourneysQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}