package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainsTldZoneIdDownloadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetDomainsTldZoneIdDownloadQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public GetDomainsTldZoneIdDownloadQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
}