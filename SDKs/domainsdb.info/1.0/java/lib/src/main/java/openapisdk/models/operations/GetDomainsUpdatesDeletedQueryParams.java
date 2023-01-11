package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainsUpdatesDeletedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetDomainsUpdatesDeletedQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public GetDomainsUpdatesDeletedQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetDomainsUpdatesDeletedQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetDomainsUpdatesDeletedQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
}